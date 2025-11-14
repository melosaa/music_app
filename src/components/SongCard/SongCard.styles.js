import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inner_container: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 27,
  },
  info_container: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  year: {
    marginLeft: 10,
    color: 'gray',
    fontWeight: 'bold',
  },
  soldout_title: {
    color: 'red',
    fontSize: 12,
  },
  soldout_container: {
    borderWidth: 1,
    borderColor: 'red',
    paddingHorizontal: 4,
    borderRadius: 5,
    justifyContent: 'center',
    height: 24,
  },
  content_container: {
    flexDirection: 'row',
  },
});
