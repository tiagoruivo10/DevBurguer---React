import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  EnvelopeSimple,
  LockKey,
  Eye,
  EyeSlash,
  ArrowRight,
  ArrowLeft,
  Flame,
  Sparkle,
} from '@phosphor-icons/react';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useUser } from '../../hooks/UserContext';
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

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { putUserData } = useUser();

  const schema = yup
    .object({
      email: yup
        .string()
        .email('Digite um e-mail válido')
        .required('O e-mail é obrigatório'),
      password: yup
        .string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('A senha é obrigatória'),
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
      const { data: userData } = await toast.promise(
        api.post('/sessions', {
          email: data.email,
          password: data.password,
        }),
        {
          pending: 'Verificando credenciais...',
          success: {
            render() {
              setTimeout(() => {
                if (userData?.admin) {
                  navigate('/admin/pedidos');
                } else {
                  navigate('/');
                }
              }, 1000);
              return `Bem-vindo(a), ${userData?.name || 'Cliente'}! 🍔`;
            },
          },
          error: 'E-mail ou senha incorretos ❌',
        },
      );

      putUserData(userData);
    } catch {
      // Toast handles error message
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
            <span>Blend 100% Angus Grelhado no Fogo</span>
          </div>

          <h1>
            O Verdadeiro Sabor do <span>Hambúrguer Artesanal</span>.
          </h1>

          <p>
            Faça login para desfrutar de ofertas exclusivas, pedir seus lanches favoritos e acompanhar a entrega em tempo real.
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
            <h2>Bem-vindo de volta!</h2>
            <p className="subtitle">
              Digite seus dados para acessar sua conta
            </p>
          </div>

          <Form onSubmit={handleSubmit(onSubmit)}>
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
                  placeholder="••••••••"
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

            <SubmitButton type="submit" disabled={isLoading}>
              <span>{isLoading ? 'Acessando...' : 'Entrar na Minha Conta'}</span>
              <ArrowRight size={18} weight="bold" />
            </SubmitButton>
          </Form>

          <p className="footer-text">
            Não tem uma conta? <Link to="/cadastro">Cadastre-se grátis.</Link>
          </p>
        </div>
      </RightContainer>
    </Container>
  );
}
