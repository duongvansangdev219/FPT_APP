import * as React from 'react';
import { StyleSheet } from 'react-native'
import { FAB, Portal, Provider } from 'react-native-paper';
const FAB = () => {
    const [state, setState] = React.useState({ open: false });
    const onStateChange = ({ open }) => setState({ open });
    const { open } = state;
    return (
        <Provider>
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? 'calendar-today' : 'plus'}
          actions={[
            { icon: 'plus', onPress: () => console.log('Pressed add') },
            {
              icon: 'bell',
              label: 'Remind',
              onPress: () => console.log('Pressed notifications'),
              small: false,
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {

            }
          }}
        />
      </Portal>
    </Provider>
    )
}

export default FAB

const styles = StyleSheet.create({})
