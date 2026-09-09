import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  ArrowLeft,
  CloudArrowUp,
  CurrencyCircleDollar,
  ListPlus,
  Tag,
  CheckCircle,
  Article,
  ListChecks,
  MinusCircle,
} from '@phosphor-icons/react';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { api } from '../../../services/api';
import { ChipsInput } from '../../../components/ChipsInput';
import {
  BackButton,
  Container,
  ContainerCheckbox,
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
  file: yup
    .mixed()
    .test('required', 'Escolha uma imagem para o produto', (value) => {
      return value && value.length > 0;
    })
    .test('fileSize', 'Carregue arquivos de até 5MB', (value) => {
      return value && value.length > 0 && value[0].size <= 5000000;
    })
    .test('type', 'Carregue apenas imagens PNG ou JPEG', (value) => {
      return (
        value &&
        value.length > 0 &&
        (value[0].type === 'image/jpeg' || value[0].type === 'image/png')
      );
    }),
});

export function NewProduct() {
  const [fileName, setFileName] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [ingredientsChips, setIngredientsChips] = useState([]);
  const [removableChips, setRemovableChips] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadCategories() {
      try {
        const { data } = await api.get('/categories');
        setCategories(data);
      } catch (err) {
        console.error('Erro ao carregar categorias:', err);
      }
    }

    loadCategories();
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const productFormData = new FormData();

      productFormData.append('name', data.name);
      productFormData.append('price', Math.round(data.price * 100));
      productFormData.append('category_id', data.category.id);
      productFormData.append('file', data.file[0]);
      productFormData.append('offer', data.offer || false);
      productFormData.append('description', data.description || '');
      productFormData.append('ingredients', ingredientsChips.join(', '));
      productFormData.append('removable', removableChips.join(', '));

      await toast.promise(api.post('/products', productFormData), {
        pending: 'Cadastrando produto...',
        success: 'Produto cadastrado com sucesso! 🎉',
        error: 'Falha ao cadastrar produto, tente novamente.',
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

  return (
    <Container>
      <HeaderContainer>
        <BackButton onClick={() => navigate('/admin/produtos')}>
          <ArrowLeft size={18} weight="bold" />
          Voltar para Produtos
        </BackButton>
        <h2>
          <ListPlus size={28} weight="duotone" />
          Cadastrar Novo Produto
        </h2>
        <p>Preencha os detalhes para incluir o item no cardápio</p>
      </HeaderContainer>

      <FormCard onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label>
            <Tag size={16} />
            Nome do Produto
          </Label>
          <Input
            type="text"
            placeholder="Ex: Hambúrguer Clássico Angus"
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
          helperText="💡 Dica: Digite o ingrediente e aperte Enter para criar o balãozinho."
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
          <Label>Imagem de Apresentação</Label>
          <LabelUpload>
            <CloudArrowUp size={24} weight="duotone" />
            <span>{fileName || 'Clique para fazer upload da foto (PNG ou JPG)'}</span>
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
              <img src={previewUrl} alt="Preview" />
              <span>Preview da imagem selecionada</span>
            </PreviewContainer>
          )}
          <ErrorMessage>{errors?.file?.message}</ErrorMessage>
        </InputGroup>

        <ContainerCheckbox>
          <input type="checkbox" id="offer-checkbox" {...register('offer')} />
          <label htmlFor="offer-checkbox">
            Colocar este produto em <strong>Oferta Especial</strong>
          </label>
        </ContainerCheckbox>

        <SubmitButton type="submit" disabled={isLoading}>
          <CheckCircle size={20} weight="bold" />
          {isLoading ? 'Salvando Produto...' : 'Cadastrar Produto no Cardápio'}
        </SubmitButton>
      </FormCard>
    </Container>
  );
}

