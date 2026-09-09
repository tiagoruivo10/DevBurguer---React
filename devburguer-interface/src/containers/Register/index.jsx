import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  User,
  EnvelopeSimple,
  LockKey,
  Eye,
  EyeSlash,
  ArrowRight,
  ArrowLeft,
  Flame,
} from '@phosphor-icons/react';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { api } from '../../services/api';
import {
  Container,
  LeftContainer,
  RightContainer,
  Form,
  InputContainer,
  InputWrapper,
  IconButton,
  SubmitButton,
  Link,
} from './styles';

export function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const schema = yup
    .object({
      name: yup.string().required('O nome completo é obrigatório'),
      email: yup
        .string()
        .email('Digite um e-mail válido')
        .required('O e-mail é obrigatório'),
      password: yup
        .string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('A senha é obrigatória'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas não coincidem')
        .required('Confirme sua senha'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const { status } = await api.post(
        '/users',
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        },
      );

      if (status === 200 || status === 201) {
        toast.success('Conta criada com sucesso! Redirecionando...');
        setTimeout(() => {
          navigate('/login');
        }, 1500);
      } else if (status === 409) {
        toast.error('E-mail já cadastrado! Faça login para continuar.');
      } else {
        throw new Error();
      }
    } catch {
      toast.error('Falha no cadastro. Tente novamente mais tarde!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      {/* Lado Esquerdo - Showcase Cinematográfico em Movimento */}
      <LeftContainer>
        <div className="image-bg" />
        <div className="gradient-overlay" />
        <div className="glow-overlay" />

        <div className="top-bar">
          <RouterLink to="/" className="back-btn">
            <ArrowLeft size={16} weight="bold" />
            Voltar ao Cardápio
          </RouterLink>
        </div>

        <div className="bottom-content">
          <div className="tag-badge">
            <Flame size={18} weight="fill" />
            <span>Descontos Especiais para Novos Clientes</span>
          </div>

          <h1>
            Junte-se ao <span>DevBurguer Club</span>.
          </h1>

          <p>
            Crie sua conta em menos de 1 minuto e tenha acesso a cupons exclusivos, pedidos ultrarrápidos e ofertas imperdíveis.
          </p>
        </div>
      </LeftContainer>

      {/* Lado Direito - Card Flutuante Dark Gourmet */}
      <RightContainer>
        <div className="form-card">
          <div className="logo-wrapper">
            <RouterLink to="/" className="brand-logo-link">
              🍔 <span>Dev</span>Burguer
            </RouterLink>
          </div>

          <div className="card-header">
            <h2>Criar sua Conta</h2>
            <p className="subtitle">
              Preencha os dados abaixo para se cadastrar
            </p>
          </div>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
              <label>Nome Completo</label>
              <InputWrapper $hasError={Boolean(errors.name)}>
                <User size={20} className="icon" />
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  {...register('name')}
                />
              </InputWrapper>
              {errors.name && <p className="error-text">{errors.name.message}</p>}
            </InputContainer>

            <InputContainer>
              <label>E-mail</label>
              <InputWrapper $hasError={Boolean(errors.email)}>
                <EnvelopeSimple size={20} className="icon" />
                <input
                  type="email"
                  placeholder="exemplo@email.com"
                  {...register('email')}
                />
              </InputWrapper>
              {errors.email && <p className="error-text">{errors.email.message}</p>}
            </InputContainer>

            <InputContainer>
              <label>Senha</label>
              <InputWrapper $hasError={Boolean(errors.password)}>
                <LockKey size={20} className="icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Mínimo 6 caracteres"
                  {...register('password')}
                />
                <IconButton
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                >
                  {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
                </IconButton>
              </InputWrapper>
              {errors.password && (
                <p className="error-text">{errors.password.message}</p>
              )}
            </InputContainer>

            <InputContainer>
              <label>Confirmar Senha</label>
              <InputWrapper $hasError={Boolean(errors.confirmPassword)}>
                <LockKey size={20} className="icon" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Repita sua senha"
                  {...register('confirmPassword')}
                />
                <IconButton
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  tabIndex={-1}
                >
                  {showConfirmPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
                </IconButton>
              </InputWrapper>
              {errors.confirmPassword && (
                <p className="error-text">{errors.confirmPassword.message}</p>
              )}
            </InputContainer>

            <SubmitButton type="submit" disabled={isLoading}>
              <span>{isLoading ? 'Cadastrando...' : 'Criar Minha Conta Grátis'}</span>
              <ArrowRight size={18} weight="bold" />
            </SubmitButton>
          </Form>

          <p className="footer-text">
            Já possui uma conta? <Link to="/login">Faça o login aqui.</Link>
          </p>
        </div>
      </RightContainer>
    </Container>
  );
}
