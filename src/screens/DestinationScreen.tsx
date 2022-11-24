import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, { useContext, useRef, useState } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAP_API_KEY } from '@env';

import { Avatar, Icon } from 'react-native-elements';
import { colors, parameters } from '../global/styles';
import { DestinationContext, OriginContext } from '../context/contexts';

type Props = { navigation: any };

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const DestinationScreen = ({ navigation }: Props) => {
  // get context items
  const { dispatchOrigin }: any = useContext(OriginContext);
  const { dispatchDestination }: any = useContext(DestinationContext);

  //   screen state
  const [destination, setDestination] = useState(false);

  const textInput1: any = useRef(4);
  const textInput2 = useRef(5);

  return (
    <>
      <View style={styles.view2}>
        <View style={styles.view1}>
          <Icon
            type="material-community"
            name="arrow-left"
            color={colors.grey1}
            size={32}
            tvParallaxProperties={undefined}
            onPress={() => navigation.goBack()}
          />
        </View>
        <TouchableOpacity>
          <View style={{ alignItems: 'center' }}>
            <View style={styles.view3}>
              <Avatar
                rounded
                avatarStyle={{}}
                size={30}
                source={require('../../assets/blankProfilePic.jpg')}
              />
              <Text style={{ marginLeft: 5 }}>For Someone</Text>
              <Icon
                type="material-community"
                name="chevron-down"
                color={colors.grey1}
                size={26}
                tvParallaxProperties={undefined}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>

      {/* Google place auto commplete feature */}
      {destination === false && (
        <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlacesSearch"
          placeholder="From..."
          listViewDisplayed="auto"
          debounce={400}
          currentLocation={true}
          ref={textInput1}
          minLength={2}
          enablePoweredByContainer={false}
          fetchDetails={true}
          autoFocus={true}
          styles={autoComplete}
          query={{ key: GOOGLE_MAP_API_KEY, language: 'en' }}
          onPress={(data, details = null) => {
            dispatchOrigin({
              type: 'ADD_ORIGIN',
              payload: {
                latitude: details?.geometry.location.lat,
                longitude: details?.geometry.location.lng,
                address: details?.formatted_address,
                name: details?.name,
              },
            });

            setDestination(true);
          }}
        />
      )}

      {destination && (
        <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlacesSearch"
          placeholder="Going to..."
          listViewDisplayed="auto"
          debounce={400}
          currentLocation={true}
          ref={textInput2}
          minLength={2}
          enablePoweredByContainer={false}
          fetchDetails={true}
          autoFocus={true}
          styles={autoComplete}
          query={{ key: GOOGLE_MAP_API_KEY, language: 'en' }}
          onPress={(data, details = null) => {
            dispatchDestination({
              type: 'ADD_DESTINATION',
              payload: {
                latitude: details?.geometry.location.lat,
                longitude: details?.geometry.location.lng,
                address: details?.formatted_address,
                name: details?.name,
              },
            });

            navigation.goBack();
          }}
        />
      )}
    </>
  );
};

export default DestinationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: parameters.statusBarHeight,
  },

  view1: {
    position: 'absolute',
    top: parameters.statusBarHeight,
    left: 12,
    backgroundColor: colors.white,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
    zIndex: 10,
  },

  view3: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 10,
    backgroundColor: colors.white,
    height: 30,
    zIndex: 10,
  },

  view2: {
    paddingTop: parameters.statusBarHeight,
    backgroundColor: colors.white,
    zIndex: 4,
    paddingBottom: 10,
  },

  view24: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    paddingHorizontal: 20,
  },

  view25: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },

  flatlist: {
    marginTop: 20,
    zIndex: 17,
    elevation: 8,
  },
});

const autoComplete = {
  textInput: {
    backgroundColor: colors.grey6,
    height: 50,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 15,
    flex: 1,
    borderWidth: 1,
    marginHorizontal: 15,
  },
  container: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: colors.white,
  },

  textInputContainer: {
    flexDirection: 'row',
  },
};
