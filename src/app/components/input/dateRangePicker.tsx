import { DownCircleOutlined } from "@ant-design/icons";
import { DatePicker, Divider } from "antd";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import React, { useEffect } from "react";

interface DateRangePickerProps {
  onValue: (value: { startDate: string; endDate: string }) => void;
}

const dateFormat = "YYYY-MM-DD HH:mm:ss";
const dateFormatView = "DD MMM YYYY";

const DateRangePicker: React.FC<RangePickerProps & DateRangePickerProps> = ({
  onValue,
  ...props
}) => {
  const onChange = (
    value: DatePickerProps["value"] | RangePickerProps["value"],
    [startDateString, endDateString]: [string, string]
  ) => {
    const parsedDateStart = dayjs(startDateString, dateFormatView).startOf(
      "day"
    ); // Set time to 00:00:00
    const parsedDateEnd = dayjs(endDateString, dateFormatView).endOf("day");

    const startDate = parsedDateStart.format(dateFormat);
    const endDate = parsedDateEnd.format(dateFormat);

    onValue({ startDate, endDate });
  };

  useEffect(() => {
    const currentDay = dayjs();
    onValue({
      startDate: currentDay.startOf("day").format(dateFormat),
      endDate: currentDay.endOf("day").format(dateFormat),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex w-full rounded-[4px] bg-selago border border-solid border-meelrose">
      <DatePicker.RangePicker
        bordered={false}
        format={dateFormatView}
        defaultValue={[
          dayjs(dayjs().format(dateFormatView), dateFormatView),
          dayjs(dayjs().format(dateFormatView), dateFormatView),
        ]}
        onChange={onChange}
        {...props}
        className="shadow-picker w-full !p-3"
        separator={<Divider type="vertical" className="text-meelrose !p-0 !m-0"/>}
      />
    </div>
  );
};

export default DateRangePicker;
