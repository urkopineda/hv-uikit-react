import {
  HvTooltip,
  HvTypography,
  HvTableColumnConfig,
  HvCellProps,
} from "@hitachivantara/uikit-react-core";
import {
  Level0Good,
  Level1,
  Level2Average,
  Level3Bad,
  Refresh,
} from "@hitachivantara/uikit-react-icons";

export const getStatusIcon = (status: number) => {
  switch (status) {
    case 0:
      return <Level0Good semantic="positive" iconSize="XS" />;
    case 1:
      return <Level3Bad semantic="negative" iconSize="XS" />;
    case 2:
      return <Level2Average semantic="warning" iconSize="XS" />;
    default:
      return <Level1 semantic="neutral" iconSize="XS" />;
  }
};

export const getColumns = (): HvTableColumnConfig<ListViewModel, string>[] => [
  {
    Header: "Status",
    accessor: "status",
    style: { width: 40 },
    Cell: ({ row }: HvCellProps<ListViewModel, string>) => {
      switch (row.original.status) {
        case 0:
          return (
            <HvTooltip title={<HvTypography>Success</HvTypography>}>
              <div>{getStatusIcon(0)}</div>
            </HvTooltip>
          );
        case 1:
          return (
            <HvTooltip title={<HvTypography>Error</HvTypography>}>
              <div>{getStatusIcon(1)}</div>
            </HvTooltip>
          );
        case 2:
          return (
            <HvTooltip title={<HvTypography>Open</HvTypography>}>
              <div>{getStatusIcon(2)}</div>
            </HvTooltip>
          );
        default:
          return (
            <HvTooltip title={<HvTypography>Unassigned</HvTypography>}>
              <div>{getStatusIcon(3)}</div>
            </HvTooltip>
          );
      }
    },
  },
  { Header: "Name", accessor: "name", style: { minWidth: 200 } },
  { Header: "Description", accessor: "description", style: { minWidth: 200 } },
  { Header: "Server ID", accessor: "serverId", style: { width: 120 } },
  { Header: "Created", accessor: "created" },
  { Header: "Build", accessor: "build", style: { width: 120 } },
];

export const actions = [{ id: "refresh", label: "Refresh", icon: <Refresh /> }];

// ---- Data Utils

const entries = [
  { name: "Previous", description: "Clean Data Logs" },
  { name: "Home", description: "Review Log" },
  { name: "Carriage", description: "Deploy Cloud Run" },
  { name: "Black", description: "Clean Session" },
  { name: "Forward", description: "Update Build" },
];

const getDate = (): string => {
  const start = new Date(2018, 1, 1);
  const end = new Date();
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );

  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDay()}`;
};

const getRandomStatus = (): number => {
  return Math.floor(Math.random() * 4);
};

const getServerID = (): number =>
  Math.floor(100000000 + Math.random() * 1000000000);

const getBuild = (): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < 6; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const getRandEntry = () => entries[Math.floor(Math.random() * entries.length)];

const getNewEntry = (i: number): ListViewModel => {
  const entry = getRandEntry();
  return {
    id: `${i + 1}`,
    name: entry.name,
    description: entry.description,
    serverId: getServerID(),
    created: getDate(),
    build: getBuild(),
    status: getRandomStatus(),
  };
};

export const makeData = (len = 10): ListViewModel[] => {
  const data: ListViewModel[] = [];
  for (let i = 0; i <= len; i += 1) {
    data.push(getNewEntry(i));
  }
  return data;
};
