import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50,
        // paddingBottom: 10
    },
    image: {
        width: '100%',
        height: 360,
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
        fontFamily: theme.fonts.title700,
        lineHeight: 40
    },
    subTitle: {
        color: theme.colors.heading,
        fontSize: 15,
        fontFamily: theme.fonts.title500,
        textAlign: 'center',
        lineHeight: 25,
        marginBottom: 10,
    }
})