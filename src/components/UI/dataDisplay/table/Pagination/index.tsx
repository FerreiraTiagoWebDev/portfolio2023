import { useMemo } from "react";

import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";

import { Text } from "@ui/Text";
import { SelectField } from "@ui/form";
import ComponentIsVisible from "src/components/Atoms/ComponentIsVisible";
import { Button } from "../../../Button";
import { Flex } from "../../../layout";
import { Table } from "../index";

interface ITablePaginationProps {
  handleFirstPage?: () => void;
  handleLastPage?: () => void;
  handleNextPage?: () => void;
  handlePerPageLengthChange?: (value: number) => void;
  handlePrevPage?: () => void;
  page: number;
  perPageLength?: number;
  rowsPerPage?: number[];
  totalPages?: number;
}

export function TablePagination({
  handleFirstPage,
  handleLastPage,
  handleNextPage,
  handlePerPageLengthChange,
  handlePrevPage,
  page,
  perPageLength = 0,
  rowsPerPage = [25, 50, 100, 250, 500],
  totalPages = 0,
}: ITablePaginationProps) {
  const rowsPerPageFormatted = useMemo(() => {
    const options = rowsPerPage.map((rowPerPage) => {
      return {
        label: rowPerPage,
        value: rowPerPage,
      };
    });

    return options;
  }, [rowsPerPage]);

  const handleRowsPerPageChange = (value: string) => {
    if (perPageLength !== Number(value)) {
      if (handlePerPageLengthChange) {
        handlePerPageLengthChange(Number(value));
      }
    }
  };

  return (
    <Table.Row>
      <Table.Cell colSpan={100}>
        <Flex className="max-w-fit ml-auto items-center justify-end gap-x-4">
          <ComponentIsVisible when={!!handlePerPageLengthChange}>
            <Flex className="items-center max-w-fit gap-x-4 mr-8">
              <Text className="text-gray-700 min-w-fit text-sm">
                Rows per page:
              </Text>
              <Flex className="max-w-fit">
                <SelectField
                  containerProps={{ className: "rounded h-7 w-fit" }}
                  defaultValue={rowsPerPageFormatted[0].value.toString()}
                  groups={[{ options: rowsPerPageFormatted }]}
                  onValueChange={(value) => handleRowsPerPageChange(value)}
                  triggerProps={{ className: "px-2" }}
                  viewportProps={{ className: "p-0" }}
                />
              </Flex>
            </Flex>
          </ComponentIsVisible>
          <Flex className="items-center max-w-fit h">
            <Text className="text-gray-700 text-sm">{`${page} of ${totalPages}`}</Text>
          </Flex>
          <Flex>
            <Button
              className="h-8 px-0 text-gray-700 w-12"
              design="icon-only"
              disabled={page <= 1}
              onClick={handleFirstPage}
            >
              <FiChevronsLeft size={22} />
            </Button>
            <Button
              className="h-8 px-0 text-gray-700 w-12"
              design="icon-only"
              disabled={page <= 1}
              onClick={handlePrevPage}
            >
              <FiChevronLeft size={22} />
            </Button>
            <Button
              className="h-8 px-0 text-gray-700 w-12"
              design="icon-only"
              disabled={page === totalPages}
              onClick={handleNextPage}
            >
              <FiChevronRight size={22} />
            </Button>
            <Button
              className="h-8 px-0 text-gray-700 w-12"
              design="icon-only"
              disabled={page === totalPages}
              onClick={handleLastPage}
            >
              <FiChevronsRight size={22} />
            </Button>
          </Flex>
        </Flex>
      </Table.Cell>
    </Table.Row>
  );
}
