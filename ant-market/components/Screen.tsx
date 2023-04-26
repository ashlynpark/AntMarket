import * as React from "react"
import { KeyboardAvoidingView, Platform, ScrollView, StatusBar, View, Dimensions } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const isIos = Platform.OS === "ios"

const ScreenWithoutScrolling = (props: any) => {
  const insets = useSafeAreaInsets()
  const preset = presets.fixed
  const style = props.style || {}
  const backgroundStyle = props.backgroundColor ? { backgroundColor: props.backgroundColor } : {}
  const insetStyle = { paddingTop: props.unsafe ? 0 : insets.top }

  return (
    <KeyboardAvoidingView
      style={[preset.outer, backgroundStyle]}
      behavior={isIos ? "padding" : undefined}
    >
      <StatusBar barStyle={props.statusBar || "light-content"} />
      <View style={[preset.inner, style, insetStyle]}>{props.children}</View>
    </KeyboardAvoidingView>
  )
}

const ScreenWithScrolling = (props: any) => {
   const preset = presets.scroll
  const style = props.style || {}
  const backgroundStyle = props.backgroundColor ? { backgroundColor: props.backgroundColor } : {}

  return (
    <KeyboardAvoidingView
      style={[preset.outer, backgroundStyle]}
      behavior={isIos ? "padding" : undefined}
    >
      <StatusBar barStyle={props.statusBar || "light-content"} />
      <View style={[preset.outer, backgroundStyle]}>
        <ScrollView
          style={[preset.outer, backgroundStyle]}
          contentContainerStyle={[preset.inner, style]}
          keyboardShouldPersistTaps={props.keyboardShouldPersistTaps || "handled"}
        >
          {props.children}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  )
}


const Screen = (props: any) => {
    const isNonScrolling = props.preset === 'fixed'
  if (isNonScrolling) {
    return <ScreenWithoutScrolling {...props} />
  }
  return <ScreenWithScrolling {...props} />
}

const presets = {
    fixed: {
        outer: {
            flex: 1,
            height: Dimensions.get('window').height,
        },
        inner: {
            justifyContent: "flex-start",
            alignItems: "stretch",
            height: Dimensions.get('window').height,
            width: Dimensions.get('window').width,
        }
    },
    scroll: {
        outer: {
            flex: 1,
            height: Dimensions.get('window').height,
        },
        inner: {
            justifyContent: "flex-start",
            alignItems: "stretch",
            width: Dimensions.get('window').width,
        }
    }
}

export default Screen