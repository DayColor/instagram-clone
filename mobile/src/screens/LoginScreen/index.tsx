import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import LinearGradient from 'react-native-linear-gradient';
import { human, iOSColors, systemWeights } from 'react-native-typography';
import { startMainApp } from '../../Nav';
import { LoginProps, Provider, withLogin } from '../../graphql-types';
import { authToken } from '../../utils/constants';
import { Fonts } from '../../utils/themes';

const COLORS_GRADIENTS = ['#74398D', '#56499E'];

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  header: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    color: iOSColors.white,
    fontSize: 50,
    fontFamily: Fonts.Lobster,
  },
  content: {
    flex: 1,
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionBottom: {
    flex: 0.7,
    justifyContent: 'flex-start',
  },
  inputWrapper: {
    height: 45,
    width: '90%',
    borderRadius: 5,
    borderColor: '#E4E4E4',
    borderWidth: 1,
    backgroundColor: '#FAF9F9',
    marginBottom: 10,
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 0,
  },
  loginBtn: {
    height: 45,
    width: '90%',
    borderRadius: 5,
    backgroundColor: '#318DEE70',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtnText: {
    color: iOSColors.white,
  },
  forgotWrapper: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  callout: {
    ...human.footnoteObject,
    ...systemWeights.semibold,
    color: iOSColors.midGray,
  },
  btnText: {
    ...human.footnoteObject,
    ...systemWeights.semibold,
    color: '#318DEE',
  },
  orWrapper: {
    width: '90%',
    marginVertical: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  orDivider: {
    height: 1,
    width: '100%',
    flex: 1,
    backgroundColor: '#E4E4E4',
  },
  orTextWrapper: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orText: {
    ...systemWeights.semibold,
    color: iOSColors.gray,
  },
  fbLoginBtn: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  fbLoginBtnText: {
    ...human.calloutObject,
    ...systemWeights.semibold,
    color: '#318DEE',
    marginLeft: 10,
  },
  fbLoginIcon: {
    color: '#318DEE',
  },
  noAccountWrapper: {
    height: 50,
    width: '100%',
    borderColor: '#ECECEC',
    borderTopWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

interface State {
  loading: boolean;
}

class LoginScreen extends Component<LoginProps, State> {
  public state: State = {
    loading: false,
  };

  private onLoginFbPress = async () => {
    this.setState({ loading: true });

    const res = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (res.grantedPermissions && !res.isCancelled) {
      const data = await AccessToken.getCurrentAccessToken();

      if (data) {
        const serverResponse = await this.props.mutate({
          variables: {
            provider: Provider.Facebook,
            token: data.accessToken,
          },
        });

        if (!serverResponse.data?.login) {
          return;
        }

        const { token } = serverResponse.data.login;

        try {
          await AsyncStorage.setItem(authToken, token);

          startMainApp();
        } catch (err) {
          throw err;
        }
      }

      this.setState({ loading: false });
    }
  };

  public render() {
    if (this.state.loading) {
      return (
        <View style={styles.root}>
          <ActivityIndicator size="large" color="#318DEE" />
        </View>
      );
    }

    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" />
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={COLORS_GRADIENTS}
          style={styles.header}>
          <Text style={styles.appName}>Instagram</Text>
        </LinearGradient>
        <View style={styles.content}>
          <View style={styles.section}>
            <View style={styles.inputWrapper}>
              <TextInput
                underlineColorAndroid="transparent"
                style={styles.input}
                placeholder="Email"
              />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                underlineColorAndroid="transparent"
                style={styles.input}
                placeholder="Password"
              />
            </View>
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginBtnText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.forgotWrapper}>
              <Text style={styles.callout}>Forgot your login details? </Text>
              <TouchableOpacity>
                <Text style={styles.btnText}>Get help signing in.</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.orWrapper}>
            <View style={styles.orDivider} />
            <View style={styles.orTextWrapper}>
              <Text style={styles.orText}>OR</Text>
            </View>
            <View style={styles.orDivider} />
          </View>
          <View style={[styles.section, styles.sectionBottom]}>
            <TouchableOpacity
              onPress={this.onLoginFbPress}
              style={styles.fbLoginBtn}>
              <FontAwesomeIcon
                size={30}
                icon={faFacebookSquare}
                style={styles.fbLoginIcon}
              />
              <Text style={styles.fbLoginBtnText}>Continue with Facebook</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.noAccountWrapper}>
            <Text style={styles.callout}>Don't have an account? </Text>
            <TouchableOpacity>
              <Text style={styles.btnText}>Sign up.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default withLogin()(LoginScreen);
