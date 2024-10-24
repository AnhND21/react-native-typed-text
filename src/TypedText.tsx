import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StyleProp, TextStyle, ViewStyle } from 'react-native';

interface ITypedText {
    text: string;
    speed?: number;
    pauseDuration?: number;
    textStyle?: StyleProp<TextStyle>
    viewStyle?: StyleProp<ViewStyle>
}

const TypedText: React.FC<ITypedText> = ({
    text,
    speed = 100,
    pauseDuration = 1000,
    textStyle,
    viewStyle
}: ITypedText) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            if (!isDeleting) {
                // Is Typing
                if (index < text.length) {
                    setDisplayedText(text.substring(0, index + 1));
                    setIndex(index + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), pauseDuration);
                }
            } else {
                // Is Deleting
                if (index > 0) {
                    setDisplayedText(text.substring(0, index - 1));
                    setIndex(index - 1);
                } else {
                    setIsDeleting(false);
                }
            }
        };

        const interval = setInterval(handleTyping, speed);

        return () => clearInterval(interval);
    }, [text, index, isDeleting, speed, pauseDuration]);

    return (
        <View style={[styles.container, viewStyle]}>
            <Text>
                📖
            </Text>
            <Text
                style={[styles.text, textStyle]}
            >
                {displayedText}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 28,
    },
    text: {
        fontSize: 18,
        marginLeft: 4,
    },
});

export default TypedText;
