import { Link as ReactLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const floatSlow = keyframes`
  0%, 100% { transform: scale(1) translateY(0); }
  50% { transform: scale(1.06) translateY(-8px); }
`;

const emberPulse = keyframes`
  0%, 100% { opacity: 0.3; transform: translateY(0) scale(0.9); }
  50% { opacity: 0.8; transform: translateY(-20px) scale(1.1); }
`;

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.mainBlack};
  position: relative;
  overflow: hidden;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  flex: 1.15;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px;
  overflow: hidden;
  min-height: 100vh;

  .video-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    animation: ${floatSlow} 18s ease-in-out infinite;
  }

  .image-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=1600&auto=format&fit=crop&q=85');
    background-size: cover;
    background-position: center;
    z-index: 1;
    animation: ${floatSlow} 20s ease-in-out infinite;
  }

  .gradient-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(11, 15, 23, 0.6) 0%,
      rgba(11, 15, 23, 0.2) 30%,
      rgba(11, 15, 23, 0.75) 65%,
      rgba(11, 15, 23, 0.98) 100%
    );
    z-index: 2;
  }

  .glow-overlay {
    position: absolute;
    bottom: -100px;
    left: -100px;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(255, 107, 0, 0.25) 0%, transparent 70%);
    z-index: 2;
    pointer-events: none;
    animation: ${emberPulse} 6s ease-in-out infinite;
  }

  .top-bar {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .back-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(17, 24, 39, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: ${(props) => props.theme.white};
    padding: 10px 18px;
    border-radius: 30px;
    font-size: 13px;
    font-weight: 700;
    text-decoration: none;
    backdrop-filter: blur(12px);
    transition: all 0.2s ease;

    &:hover {
      background: ${(props) => props.theme.orange};
      border-color: ${(props) => props.theme.orange};
      transform: translateX(-3px);
      box-shadow: 0 4px 14px rgba(255, 107, 0, 0.4);
    }
  }

  .bottom-content {
    position: relative;
    z-index: 10;
    max-width: 540px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: auto;
    padding-bottom: 20px;

    .tag-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(255, 107, 0, 0.2);
      border: 1px solid rgba(255, 107, 0, 0.5);
      color: ${(props) => props.theme.orange};
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      width: fit-content;
      backdrop-filter: blur(8px);
    }

    h1 {
      font-size: 42px;
      font-weight: 900;
      color: ${(props) => props.theme.white};
      line-height: 1.15;
      letter-spacing: -0.5px;
      text-shadow: 0 4px 20px rgba(0, 0, 0, 0.9);

      span {
        color: ${(props) => props.theme.orange};
      }
    }

    p {
      font-size: 16px;
      color: #cbd5e1;
      line-height: 1.6;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
    }
  }

  @media (max-width: 960px) {
    min-height: 380px;
    padding: 24px;

    .bottom-content h1 {
      font-size: 28px;
    }
  }
`;

export const RightContainer = styled.div`
  flex: 0.85;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 32px;
  background: radial-gradient(
    circle at top right,
    rgba(255, 107, 0, 0.08) 0%,
    rgba(11, 15, 23, 1) 75%
  );
  position: relative;
  z-index: 10;

  .form-card {
    width: 100%;
    max-width: 440px;
    background-color: ${(props) => props.theme.secondBlack};
    border: 1px solid ${(props) => props.theme.cardBorder || props.theme.darkGray};
    border-radius: 28px;
    padding: 44px 36px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(20px);

    .logo-wrapper {
      display: flex;
      justify-content: center;
      margin-bottom: 24px;

      .brand-logo-link {
        font-size: 28px;
        font-weight: 900;
        color: ${(props) => props.theme.white};
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 8px;
        letter-spacing: -0.5px;
        transition: transform 0.2s ease;

        span {
          color: ${(props) => props.theme.orange};
        }

        &:hover {
          transform: scale(1.05);
        }
      }
    }

    .card-header {
      margin-bottom: 28px;
      text-align: center;

      h2 {
        font-size: 26px;
        font-weight: 900;
        color: ${(props) => props.theme.white};
        letter-spacing: -0.5px;
      }

      .subtitle {
        color: ${(props) => props.theme.lightGray};
        font-size: 14px;
        margin-top: 6px;
      }
    }

    .footer-text {
      text-align: center;
      margin-top: 24px;
      font-size: 14px;
      color: ${(props) => props.theme.lightGray};
    }
  }

  @media (max-width: 480px) {
    padding: 24px 16px;

    .form-card {
      padding: 32px 20px;
      border-radius: 20px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: 14px;
    font-weight: 600;
    color: ${(props) => props.theme.white};
  }

  .error-text {
    font-size: 12px;
    color: ${(props) => props.theme.red};
    font-weight: 600;
    margin-top: 2px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.mainBlack};
  border: 1px solid
    ${(props) => (props.$hasError ? props.theme.red : props.theme.darkGray)};
  border-radius: 12px;
  padding: 0 16px;
  height: 52px;
  transition: all 0.2s ease;

  &:focus-within {
    border-color: ${(props) =>
      props.$hasError ? props.theme.red : props.theme.orange};
    box-shadow: 0 0 0 3px
      ${(props) =>
        props.$hasError
          ? 'rgba(239, 68, 68, 0.2)'
          : 'rgba(255, 107, 0, 0.2)'};
  }

  .icon {
    color: ${(props) =>
      props.$hasError ? props.theme.red : props.theme.lightGray};
    margin-right: 12px;
    flex-shrink: 0;
  }

  input {
    flex: 1;
    background: transparent;
    border: none;
    color: ${(props) => props.theme.white};
    font-size: 15px;
    font-weight: 500;
    width: 100%;

    &::placeholder {
      color: ${(props) => props.theme.lightGray};
      opacity: 0.65;
    }
  }
`;

export const IconButton = styled.button`
  background: transparent;
  border: none;
  color: ${(props) => props.theme.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.white};
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 52px;
  border-radius: 14px;
  background: linear-gradient(135deg, ${(props) => props.theme.orange} 0%, #ea580c 100%);
  color: ${(props) => props.theme.white};
  border: none;
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.5px;
  cursor: pointer;
  box-shadow: 0 4px 18px rgba(255, 107, 0, 0.45);
  transition: all 0.2s ease;
  margin-top: 6px;

  &:hover {
    background: linear-gradient(135deg, #fb923c 0%, ${(props) => props.theme.orange} 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(255, 107, 0, 0.6);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const Link = styled(ReactLink)`
  color: ${(props) => props.theme.orange};
  font-weight: 700;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
