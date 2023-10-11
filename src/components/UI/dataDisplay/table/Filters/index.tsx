import { PropsWithChildren } from 'react';

import { Button } from '../../../Button';
import { Backdrop, Modal } from '../../../overlay';

interface ITableFiltersProps {
  handleClose: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
  handleFilter?: () => void;
  handleReset?: React.MouseEventHandler<HTMLButtonElement>;
  hasFilters?: boolean;
  isLoading?: boolean;
  open: boolean;
}

export function TableFilters({
  children,
  handleClose,
  handleFilter,
  handleReset,
  hasFilters = false,
  isLoading = false,
  open,
}: PropsWithChildren<ITableFiltersProps>) {
  return (
    <Modal.Root
      backdrop={<Backdrop onClick={handleClose} open={open} />}
      open={open}
    >
      <Modal.Container className="max-h-full h-screen w-80 py-4 ml-auto">
        <Modal.Header handleClose={handleClose} title="Filters" />

        <Modal.Content>
          <form onSubmit={handleFilter}>
            {children}

            <Modal.Actions className="grid-cols-2 mt-4 px-4">
              <Button
                className="text-secondary-two w-9/12"
                design="transparent"
                disabled={isLoading || !hasFilters}
                onClick={handleReset}
              >
                Reset
              </Button>
              <Button
                className="ml-auto w-9/12"
                design="secondary-dark"
                disabled={isLoading}
                isLoading={isLoading}
                type="submit"
              >
                Filter
              </Button>
            </Modal.Actions>
          </form>
        </Modal.Content>
      </Modal.Container>
    </Modal.Root>
  );
}
