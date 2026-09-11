import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  ArrowLeft,
  CloudArrowUp,
  CurrencyCircleDollar,
  PencilSimple,
  Tag,
  CheckCircle,
  Article,
  ListChecks,
  MinusCircle,
  Trash,
} from '@phosphor-icons/react';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { api } from '../../../services/api';
import { ChipsInput } from '../../../components/ChipsInput';
import { ConfirmDeleteModal } from '../../../components/ConfirmDeleteModal';
import { getProductDetails } from '../../../data/productsInfo';
import {
  BackButton,
  ButtonGroup,
  Container,
  ContainerCheckbox,
  DeleteProductButton,
  ErrorMessage,
  FormCard,
  HeaderContainer,
  Input,
  InputGroup,
  Label,
  LabelUpload,
  PreviewContainer,
  Select,
  selectStyles,
  SubmitButton,
  Textarea,
} from './styles';


const schema = yup.object({
  name: yup.string().required('Digite o nome do produto'),
  price: yup
    .number()
    .positive('O preço deve ser positivo')
    .required('Digite o preço do produto')
    .typeError('Digite um valor numérico válido'),
  category: yup.object().required('Escolha uma categoria'),
  offer: yup.boolean(),
  description: yup.string().nullable(),
  ingredients: yup.string().nullable(),
  removable: yup.string().nullable(),
});

export function EditProduct() {
  const [fileName, setFileName] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product;

  const [ingredientsChips, setIngredientsChips] = useState(() => {
    if (product?.ingredients) {
      return product.ingredients.split(',').map((s) => s.trim()).filter(Boolean);
    }
    const defaultDetails = getProductDetails(product?.name);
    return defaultDetails?.ingredients || [];
  });

  const [removableChips, setRemovableChips] = useState(() => {
    if (product?.removable) {
      return product.removable.split(',').map((s) => s.trim()).filter(Boolean);
    }
    const defaultDetails = getProductDetails(product?.name);
    return defaultDetails?.removable || [];
  });

  useEffect(() => {
    if (!product) {
      navigate('/admin/produtos');
      return;
    }

    if (product.url) {
      setPreviewUrl(product.url);
    }

    async function loadCategories() {
      try {
        const { data } = await api.get('/categories');
        setCategories(data);
      } catch (err) {
        console.error('Erro ao carregar categorias:', err);
      }
    }

    loadCategories();
  }, [product, navigate]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  if (!product) {
    return null;
  }

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const productFormData = new FormData();

      productFormData.append('name', data.name);
      productFormData.append('price', Math.round(data.price * 100));
      productFormData.append('category_id', data.category.id);
      if (data.file && data.file[0]) {
        productFormData.append('file', data.file[0]);
      }
      productFormData.append('offer', data.offer || false);
      productFormData.append('description', data.description || '');
      productFormData.append('ingredients', ingredientsChips.join(', '));
      productFormData.append('removable', removableChips.join(', '));

      await toast.promise(api.put(`/products/${product.id}`, productFormData), {
        pending: 'Atualizando produto...',
        success: 'Produto atualizado com sucesso! 🎉',
        error: 'Falha ao editar produto, tente novamente.',
      });

      setTimeout(() => {
        navigate('/admin/produtos');
      }, 1200);
    } catch {
      // Toast handles error message
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteProduct = async () => {
    try {
      setIsDeleting(true);
      await toast.promise(api.delete(`/products/${product.id}`), {
        pending: 'Excluindo produto do cardápio...',
        success: 'Produto excluído com sucesso! 🗑️',
        error: 'Falha ao excluir produto, tente novamente.',
      });

      setIsDeleteModalOpen(false);
      setTimeout(() => {
        navigate('/admin/produtos');
      }, 1000);
    } catch {
      // Toast already handles error feedback
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <BackButton onClick={() => navigate('/admin/produtos')}>
          <ArrowLeft size={18} weight="bold" />
          Voltar para Produtos
        </BackButton>
        <h2>
          <PencilSimple size={28} weight="duotone" />
          Editar Produto: {product.name}
        </h2>
        <p>Atualize os dados, imagem ou status de oferta do item</p>
      </HeaderContainer>

      <FormCard onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label>
            <Tag size={16} />
            Nome do Produto
          </Label>
          <Input
            type="text"
            defaultValue={product.name}
            placeholder="Nome do produto"
            {...register('name')}
          />
          <ErrorMessage>{errors?.name?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>
            <CurrencyCircleDollar size={16} />
            Preço (R$)
          </Label>
          <Input
            type="number"
            step="0.01"
            defaultValue={(product.price / 100).toFixed(2)}
            placeholder="Ex: 34.90"
            {...register('price')}
          />
          <ErrorMessage>{errors?.price?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>Categoria do Produto</Label>
          <Controller
            name="category"
            control={control}
            defaultValue={product.category}
            render={({ field }) => (
              <Select
                {...field}
                styles={selectStyles}
                classNamePrefix="react-select"
                options={categories}
                getOptionLabel={(category) => category.name}
                getOptionValue={(category) => category.id}
                placeholder="Selecione uma categoria..."
                menuPortalTarget={document.body}
              />
            )}
          />

          <ErrorMessage>{errors?.category?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>
            <Article size={16} />
            Descrição Gastronômica do Produto
          </Label>
          <Textarea
            rows={3}
            defaultValue={product.description || getProductDetails(product.name).description || ''}
            placeholder="Ex: Smash bovino artesanal suculento, queijo cheddar derretido, alface fresca..."
            {...register('description')}
          />
          <ErrorMessage>{errors?.description?.message}</ErrorMessage>
        </InputGroup>

        {/* Balõezinhos Interativos de Ingredientes */}
        <ChipsInput
          label="Ingredientes & Composição"
          icon={ListChecks}
          chips={ingredientsChips}
          onChange={setIngredientsChips}
          placeholder="Ex: Pão brioche, Smash 150g... (Aperte Enter)"
          variant="ingredient"
          helperText="💡 Dica: Clique no texto de qualquer balãozinho para editar ou no ✕ para apagar."
        />

        {/* Balõezinhos Interativos de Opções de Retirada */}
        <ChipsInput
          label="Prefere sem algum item? (Opções de Retirada)"
          icon={MinusCircle}
          chips={removableChips}
          onChange={setRemovableChips}
          placeholder="Ex: Sem cebola, Molho à parte... (Aperte Enter)"
          variant="removable"
          helperText="💡 Dica: Esses balõezinhos viram os chips clicáveis para o cliente retirar no modal."
        />

        <InputGroup>
          <Label>Imagem do Produto</Label>
          <LabelUpload>
            <CloudArrowUp size={24} weight="duotone" />
            <span>{fileName || 'Clique caso queira alterar a foto do produto'}</span>
            <input
              type="file"
              {...register('file')}
              accept="image/png, image/jpeg"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setFileName(file.name);
                  setPreviewUrl(URL.createObjectURL(file));
                }
                register('file').onChange(e);
              }}
            />
          </LabelUpload>
          {previewUrl && (
            <PreviewContainer>
              <img src={previewUrl} alt="Preview do Produto" />
              <span>{fileName ? 'Nova imagem selecionada' : 'Imagem atual cadastrada'}</span>
            </PreviewContainer>
          )}
          <ErrorMessage>{errors?.file?.message}</ErrorMessage>
        </InputGroup>

        <ContainerCheckbox>
          <input
            type="checkbox"
            id="edit-offer-checkbox"
            defaultChecked={product.offer}
            {...register('offer')}
          />
          <label htmlFor="edit-offer-checkbox">
            Colocar este produto em <strong>Oferta Especial</strong>
          </label>
        </ContainerCheckbox>

        <ButtonGroup>
          <SubmitButton type="submit" disabled={isLoading || isDeleting}>
            <CheckCircle size={20} weight="bold" />
            {isLoading ? 'Salvando Alterações...' : 'Atualizar Dados do Produto'}
          </SubmitButton>

          <DeleteProductButton
            type="button"
            onClick={() => setIsDeleteModalOpen(true)}
            disabled={isLoading || isDeleting}
          >
            <Trash size={20} weight="bold" />
            Excluir Produto
          </DeleteProductButton>
        </ButtonGroup>
      </FormCard>

      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteProduct}
        productName={product.name}
        isLoading={isDeleting}
      />
    </Container>
  );
}

