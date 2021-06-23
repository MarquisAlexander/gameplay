import React from "react";
import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { categories } from "../../utils/categories";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { Category } from "../Category";

type Props = {
  title: string;
  subtitle: string;
};

export function ListHeader({ title, subtitle }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}
