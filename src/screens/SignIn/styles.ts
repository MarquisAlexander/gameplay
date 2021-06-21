import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.color.background,
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
        color: theme.color.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
    },
    subTitle: {
        color: theme.color.heading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 10,
    }
})