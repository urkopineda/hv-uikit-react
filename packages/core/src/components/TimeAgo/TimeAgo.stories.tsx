import { Meta, StoryObj } from "@storybook/react";
import {
  HvRadio,
  HvRadioGroup,
  HvTimeAgo,
  HvTimeAgoProps,
  HvTypography,
} from "@core/components";
import { useMemo, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import "dayjs/locale/de";
import "dayjs/locale/pt";
import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  root: css({
    display: "flex",
    alignItems: "center",
  }),
  container: css({
    minHeight: 300,
    "& > div": {
      padding: theme.spacing("xs"),
    },
  }),
  table: css({
    border: `1px solid ${theme.colors.secondary}`,
    borderCollapse: "collapse",
    "& th, td": {
      border: `1px solid ${theme.colors.secondary}`,
      padding: theme.spacing(["5px", "sm"]),
    },
  }),
};

const meta: Meta<typeof HvTimeAgo> = {
  title: "Components/Time Ago",
  component: HvTimeAgo,
  parameters: { eyes: { include: false } },
};
export default meta;

export const Main: StoryObj<HvTimeAgoProps> = {
  args: {
    timestamp: dayjs().valueOf(),
    locale: "en",
    disableRefresh: false,
    showSeconds: false,
    justText: false,
  },
  argTypes: {
    classes: { control: { disable: true } },
    component: { control: { disable: true } },
    emptyElement: { control: { disable: true } },
    locale: { control: "select", options: ["en", "fr", "de", "pt"] },
  },
  render: (args) => {
    return <HvTimeAgo {...args} />;
  },
};

export const Samples = () => {
  const dates = useMemo(
    () =>
      [
        dayjs(),
        dayjs().subtract(1, "minutes"),
        dayjs().subtract(10, "minutes"),
        dayjs().subtract(59, "minutes"),
        dayjs().hour(0),
        dayjs().day(0),
        dayjs().date(0),
        dayjs().month(-2),
        dayjs().month(-4),
      ].map((date) => date.valueOf()),
    []
  );

  return (
    <table className={css(styles.table)}>
      <thead>
        <tr>
          <th>ISO Date</th>
          <th>{"<TimeAgo />"}</th>
        </tr>
      </thead>
      <tbody>
        {dates.map((dateTs, idx) => (
          <tr key={`${dateTs}-${idx}`}>
            <td>{new Date(dateTs).toISOString()}</td>
            <td>
              <HvTimeAgo timestamp={dateTs} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const LocaleOverride = () => {
  const [locale, setLocale] = useState("en");
  const [time /* , setTime */] = useState(Date.now());

  // const handleTimeChange = ({ hours, minutes, seconds }) => {
  //   const newDate = new Date();
  //   newDate.setHours(hours);
  //   newDate.setMinutes(minutes);
  //   newDate.setSeconds(seconds);
  //   setTime(newDate.getTime());
  // };

  // dynamically import locales
  // if the supported locales are known beforehand, its preferable
  // to import them statically, to avoid bundling unnecessary locales
  const handleLocaleChange = async (event, newLocale) => {
    setLocale(newLocale);
    dayjs.updateLocale("fr", {});
  };

  return (
    <div className={css(styles.container)}>
      <div>
        <HvRadioGroup
          orientation="horizontal"
          value={locale}
          onChange={handleLocaleChange}
        >
          <HvRadio label="🇬🇧 English" value="en" />
          <HvRadio label="🇫🇷 French" value="fr" />
          <HvRadio label="🇩🇪 German" value="de" />
          <HvRadio label="🇵🇹 Portuguese" value="pt" />
        </HvRadioGroup>
      </div>
      <div>
        <HvTypography variant="title3">
          <HvTimeAgo timestamp={time} locale={locale} />
        </HvTypography>
        <span>{new Date(time).toISOString()}</span>
      </div>
      {/* <div style={{ width: 300, minHeight: 300 }}>
        <HvTimePicker
          label="Time"
          description="Pick a time"
          onChange={handleTimeChange}
        />
      </div> */}
    </div>
  );
};

LocaleOverride.parameters = {
  docs: {
    description: {
      story:
        "Sample dates and locale controlled externally.<br /> \
        `HvTimeAgo` leverages `dayjs` for locales and custom dates. To use a locale, import it with `dayjs/locale/{locale}`<br />\
        Locale strings can be overridden using [dayjs.updateLocale](https://day.js.org/docs/en/plugin/update-locale)",
    },
  },
};
