import dayjs from "dayjs";
import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from "react-native";
import { DAY_SIZE } from "../../utils/constants";
import { generateProgressPercentage } from "../../utils/generate-progress-percentage";

type HabitDayProps = TouchableOpacityProps & {
  date?: Date;
  future?: boolean;
  amount?: number;
  completed?: number;
};

function HabitDay({
  date,
  future,
  amount,
  completed,
  ...props
}: HabitDayProps) {
  const completedPercentage = generateProgressPercentage(amount, completed);
  const today = dayjs().startOf("day").toDate();
  const isCurrentDay = dayjs(date).isSame(today);

  const getBackgroundColor = () => {
    if (future) return styles.opacity40;
    if (completedPercentage >= 80) return styles.bgGreen500;
    if (completedPercentage >= 60) return styles.bgGreen600;
    if (completedPercentage >= 40) return styles.bgGreen700;
    if (completedPercentage >= 20) return styles.bgGreen800;
    if (completedPercentage > 0) return styles.bgGreen900;
    return styles.bgZinc900;
  };

  const getBorderColor = () => {
    if (future) return styles.borderGreen400;
    if (completedPercentage >= 80) return styles.borderGreen400;
    if (completedPercentage >= 60) return styles.borderGreen500;
    if (completedPercentage >= 40) return styles.borderGreen500;
    if (completedPercentage >= 20) return styles.borderGreen600;
    if (completedPercentage > 0) return styles.borderGreen700;
    return styles.borderZinc800;
  };

  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.7}
      disabled={future}
      style={[
        styles.touchable,
        getBackgroundColor(),
        getBorderColor(),
        isCurrentDay && styles.isCurrentDay,
      ]}
    ></TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    width: DAY_SIZE,
    height: DAY_SIZE,
    borderRadius: 8,
    borderWidth: 2,
    margin: 4,
  },
  opacity40: {
    opacity: 0.4,
  },
  bgGreen500: {
    backgroundColor: "#22C55E",
    borderColor: "#16A34A",
  },
  bgGreen600: {
    backgroundColor: "#16A34A",
    borderColor: "#15803D",
  },
  bgGreen700: {
    backgroundColor: "#15803D",
    borderColor: "#166534",
  },
  bgGreen800: {
    backgroundColor: "#166534",
    borderColor: "#14532D",
  },
  bgGreen900: {
    backgroundColor: "#14532D",
    borderColor: "#134E4A",
  },
  bgZinc900: {
    backgroundColor: "#18181B",
    borderColor: "#27272A",
  },
  borderGreen400: {
    borderColor: "#16A34A",
  },
  borderGreen500: {
    borderColor: "#15803D",
  },
  borderGreen600: {
    borderColor: "#14532D",
  },
  borderGreen700: {
    borderColor: "#134E4A",
  },
  borderZinc800: {
    borderColor: "#27272A",
  },
  isCurrentDay: {
    borderColor: "#FFFFFF",
    borderWidth: 4,
  },
});

export default HabitDay;
