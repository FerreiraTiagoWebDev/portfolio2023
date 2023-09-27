import { HTMLAttributes, PropsWithChildren } from 'react';

import classNames from 'classnames';

type IArticleProps = HTMLAttributes<HTMLElement>;

export function Article({
  children,
  className = '',
  ...rest
}: PropsWithChildren<IArticleProps>) {
  return (
    <article className={classNames(`flex w-full ${className}`)} {...rest}>
      {children}
    </article>
  );
}
