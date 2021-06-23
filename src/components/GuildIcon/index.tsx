import React from "react";
import { Image, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { SvgProps } from "react-native-svg";

import { categories } from "../../utils/categories";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export function GuildIcon() {
  const uri = "https://github.com/marquisalexander.png";
  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
}
