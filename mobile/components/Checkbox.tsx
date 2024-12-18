import { Feather } from '@expo/vector-icons'
import React from 'react'
import {
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    View
} from 'react-native'
import Animated, { ZoomIn, ZoomOut } from 'react-native-reanimated'
import colors from 'tailwindcss/colors'

type CheckboxProps = TouchableOpacityProps & {
    checked?: boolean
    title: string
}

function Checkbox({ checked = false, title, ...props }: CheckboxProps) {
    return (
        <TouchableOpacity
            {...props}
            activeOpacity={0.7}
            className="flex-row items-center mb-2 bg-black">
            {checked ? (
                <Animated.View
                    entering={ZoomIn}
                    exiting={ZoomOut}
                    className="items-center justify-center w-8 h-8 bg-green-500 rounded-lg">
                    <Feather name="check" size={20} color={colors.white}></Feather>
                </Animated.View>
            ) : (
                <View className="items-center justify-center w-8 h-8 rounded-lg bg-zinc-900" />
            )}

            <Text className="ml-3 text-base font-semibold text-white">{title}</Text>
        </TouchableOpacity>
    )
}

export default Checkbox