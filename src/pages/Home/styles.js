import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },

  border: {
    backgroundColor: '#081a31',
    width: '80%',
    height: '40%',
    borderRadius: 10,
    alignSelf: 'center',
  },

  title: {
    fontSize: 20,
    color: '#f2f2f2',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },

  button: {
    marginVertical: 20,
    marginHorizontal: 40,
    borderRadius: 5,
    height: 40,
    borderWidth: 2,
    borderColor: '#e8f2e9',
    backgroundColor: '#14417b',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 18,
    color: '#f2f2f2',
    fontWeight: 'bold',
  },
});

export default styles;
