import React from 'react';
import * as S from './ErrorBoundary.styles';
import { Button } from '../ui/Button';

/**
 * 에러 바운더리 - 하위 컴포넌트 throw 시 fallback UI 표시
 */
export class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <S.Wrapper>
          <S.Title>문제가 발생했습니다</S.Title>
          <S.Message>
            {this.props.fallbackMessage ||
              this.state.error?.message ||
              '잠시 후 다시 시도해 주세요.'}
          </S.Message>
          <Button variant="primary" onClick={this.handleRetry}>
            다시 시도
          </Button>
        </S.Wrapper>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
