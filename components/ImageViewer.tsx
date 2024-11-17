import { StyleSheet } from "react-native";
import { Image, type ImageSource } from "expo-image";
type Props = {
    imgSource: ImageSource;
    selectedImage?: String;
  };
  
  export default function ImageViewer({imgSource, selectedImage}: Props){
    const imageSource = selectedImage ? { uri: selectedImage } : imgSource;


    return <Image source={imageSource} style={styles.img}/>
  }

  const styles = StyleSheet.create({
    img: {
      width: 320,
      height: 420,
      borderRadius: 18
    }
  }
);