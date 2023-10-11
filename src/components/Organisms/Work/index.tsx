"use client";

import { useCallback, useMemo, useRef, useState } from "react";

import { IoFilter } from "react-icons/io5";

import CodeIcon from "@mui/icons-material/Code";
import EngineeringIcon from "@mui/icons-material/Engineering";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import SwitchAccessShortcutAddIcon from "@mui/icons-material/SwitchAccessShortcutAdd";
import { Tooltip } from "@mui/material";
import Chip from "@mui/material/Chip";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@ui/Button";
import { Table } from "@ui/dataDisplay";
import { Box, Flex, Grid } from "@ui/layout";
import { useRouter } from "next/navigation";
import ComponentIsVisible from "src/components/Atoms/ComponentIsVisible";
import { WORK_PROJECTS } from "src/lib/Constants/projects";

export function WorkListTable() {
  const router = useRouter();
  const tableFilterRef = useRef<any>(null);
  const isInitialRender = useRef(true);

  // const [traderData, setTraderData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false);
  const [perPageLength, setPerPageLength] = useState<number>(10);
  const [sorting, setSorting] = useState<SortingState>([]);

  const MemoizedNestedPrivacyCellComponent = useCallback(
    ({ privacy }: { privacy: string }) => (
      <Box>
        <ComponentIsVisible when={privacy === "public"}>
          <OpenInNewIcon sx={{ fontSize: 22 }} />
        </ComponentIsVisible>
        <ComponentIsVisible when={privacy === "private"}>
          <LockPersonIcon sx={{ fontSize: 22 }} />
        </ComponentIsVisible>
      </Box>
    ),
    []
  );
  const MemoizedNestedImpactCellComponent = useCallback(
    ({ impact }: { impact: string[] }) => (
      <Flex className="items-center gap-x-2">
        <ComponentIsVisible when={impact.includes("Implement")}>
          <Tooltip title="Implement">
            <StarPurple500Icon sx={{ fontSize: 22 }} />
          </Tooltip>
        </ComponentIsVisible>
        <ComponentIsVisible when={impact.includes("Refactor")}>
          <Tooltip title="Refactor">
            <SwitchAccessShortcutAddIcon sx={{ fontSize: 22 }} />
          </Tooltip>
        </ComponentIsVisible>
        <ComponentIsVisible when={impact.includes("Maintenance")}>
          <Tooltip title="Maintenance">
            <EngineeringIcon sx={{ fontSize: 22 }} />
          </Tooltip>
        </ComponentIsVisible>
        <ComponentIsVisible when={impact.includes("Development")}>
          <Tooltip title="Development">
            <CodeIcon sx={{ fontSize: 22 }} />
          </Tooltip>
        </ComponentIsVisible>
      </Flex>
    ),
    []
  );
  const MemoizedNestedCompanyCellComponent = useCallback(
    ({ company }: { company: string }) => (
      <Flex className="items-center gap-x-2">
        <ComponentIsVisible when={company === "Jaimy"}>
          <Chip className="bg-jaimy text-white" label="Jaimy" />
        </ComponentIsVisible>
        <ComponentIsVisible when={company === "Fixxer"}>
          <Chip className="bg-fixxer text-white" label="Fixxer" />
        </ComponentIsVisible>
      </Flex>
    ),
    []
  );

  const columns = useMemo(() => {
    const projectsColumns: ColumnDef<any>[] = [
      {
        accessorKey: "id",
        header: "ID",
        cell: (info) => info.getValue(),
        enableSorting: true,
      },
      {
        accessorKey: "name",
        header: "Name",
        cell: (info) => info.getValue(),
        enableSorting: true,
      },
      {
        accessorKey: "company",
        header: "Company",
        cell: (info) =>
          MemoizedNestedCompanyCellComponent({
            company: info.getValue() as string,
          }),
        enableSorting: true,
      },
      {
        accessorKey: "impact",
        header: "Impact",
        cell: (info) =>
          MemoizedNestedImpactCellComponent({
            impact: info.getValue() as string[],
          }),
      },
      {
        accessorKey: "privacy",
        header: "Privacy",
        cell: (info) =>
          MemoizedNestedPrivacyCellComponent({
            privacy: info.getValue() as string,
          }),
        enableSorting: true,
      },
      {
        accessorKey: "externalHref",
        header: "",
        cell: () => <></>,
        enableHiding: true,
      },
    ];

    return projectsColumns;
  }, [
    MemoizedNestedCompanyCellComponent,
    MemoizedNestedImpactCellComponent,
    MemoizedNestedPrivacyCellComponent,
  ]);

  const table = useReactTable<any>({
    data: WORK_PROJECTS,
    enableHiding: true,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Grid className="p-8">
      <Table.Toolbar
        isLoading={isLoading}
        title="Projects list"
        toolbarActions={
          <Flex>
            <Button
              className="text-gray-700 rounded-full px-0 h-10 w-10 hover:bg-zinc-200"
              design="transparent"
              onClick={() => setIsFiltersOpen(true)}
              title="Filter"
            >
              <IoFilter size={20} />
              <ComponentIsVisible
                when={
                  tableFilterRef?.current?.numOfFiltersActive
                    ? tableFilterRef?.current?.numOfFiltersActive > 0
                    : false
                }
              >
                <Box className="absolute -bottom-1 right-0 font-semibold text-xs text-primary-two rounded-xl border-2 border-primary-one px-1">
                  {tableFilterRef.current?.numOfFiltersActive}
                </Box>
              </ComponentIsVisible>
            </Button>
          </Flex>
        }
      />

      <Table.Root>
        <Table.Head>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Row className="font-bold" key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Table.Cell
                  canSort={header.column.columnDef.enableSorting}
                  isSorted={!!header.column.getIsSorted()}
                  key={header.id}
                  onClick={
                    header.column.columnDef.enableSorting
                      ? header.column.getToggleSortingHandler()
                      : undefined
                  }
                  tableCellType="th"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {{
                    asc: <span className="text-lg font-bold ml-1">↑</span>,
                    desc: <span className="text-lg font-bold ml-1">↓</span>,
                  }[header.column.getIsSorted() as string] ?? null}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Head>
        <Table.Body>
          {table.getRowModel().rows.map((row) => (
            <Table.Row
              key={row.id}
              canBeHovered
              title={
                row.original.privacy === "public"
                  ? `Open ${row.original.name} in a new tab`
                  : ""
              }
            >
              {row.getVisibleCells().map((cell) => (
                <Table.Cell key={cell.id}>
                  <ComponentIsVisible when={row.original.privacy === "public"}>
                    <a
                      href={row.original.externalHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </a>
                  </ComponentIsVisible>
                  <ComponentIsVisible when={row.original.privacy === "private"}>
                    <span className="cursor-not-allowed">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </span>
                  </ComponentIsVisible>
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Pagination
            // handleFirstPage={() => handleChangePage(1)}
            // handleLastPage={() => handleChangePage(traderData.totalPages)}
            // handleNextPage={() => handleChangePage(traderData.currentPage + 1)}
            // handlePerPageLengthChange={value => setPerPageLength(value)}
            // handlePrevPage={() => handleChangePage(traderData.currentPage - 1)}
            page={1}
            totalPages={1}
          />
        </Table.Footer>
      </Table.Root>

      {/* <TraderListTableFilters
        handleFilter={handleFilter}
        isFiltersOpen={isFiltersOpen}
        isLoading={isLoading}
        ref={tableFilterRef}
        setIsFiltersOpen={setIsFiltersOpen}
      /> */}
    </Grid>
  );
}
