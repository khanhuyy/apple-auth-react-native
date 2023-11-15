import * as AppleAuthentication from 'expo-apple-authentication';
import { View, StyleSheet, Platform } from 'react-native';
// import ExpoAppleAuthenticationButton from './ExpoAppleAuthenticationButton';

// import supabase from 'app/utils/supabase';

export function Auth() {
    console.log(AppleAuthentication.AppleAuthenticationButton);
    console.log(__DEV__);
    
    if (Platform.OS === 'web')
    return (
        <AppleAuthentication.AppleAuthenticationButton
            buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
            buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
            cornerRadius={5}
            style={{width: 200, height: 44}}
            onPress={async () => {
            try {
                const credential = await AppleAuthentication.signInAsync({
                requestedScopes: [
                    AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                    AppleAuthentication.AppleAuthenticationScope.EMAIL,
                ],
                });
                // signed in
                if (credential.identityToken) {
                    // const {
                    //     error,
                    //     data: { user }
                    // } = await supabase.auth.signInWithIdToken({

                    // })
                }
            } catch (e) {
                // if (e.code === 'ERR_REQUEST_CANCELED') {
                // // handle that the user canceled the sign-in flow
                // } else {
                // // handle other errors
                // }
            }
            }}
        />
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    button: 'black'
  },
  button: {
    
  }
});
