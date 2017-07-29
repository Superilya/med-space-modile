import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
    state = {
        text: 'КЕК'
    }

    handleChangeInput = (val) => {
        this.setState({
            text: val
        });
    }

    handlePressButton = () => {
        console.log('asdasdasdasdasda');
    }

    render() {
        console.log('this.state.text', this.state.text);
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Авторизация</Text>
                <TextInput
                    value={this.state.text}
                    onChangeText={this.handleChangeInput}
                    style={styles.searchBar}
                    placeholder="login"
                />
                <TextInput
                    value={this.state.text}
                    onChangeText={this.handleChangeInput}
                    style={styles.searchBar}
                    placeholder="password"
                />
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
                <View style={styles.buttonWrap}>
                    <Button
                        onPress={this.handlePressButton}
                        title="Вход"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },

    searchBar: {
        borderWidth: 1,
        height: 40,
        width: '80%',
        left: '10%',
        right: '10%',
        marginTop: '2%',
        borderRadius: 3,
        paddingLeft: 5
    },

    header: {
        fontSize: 30,
        marginBottom: 20,
        textAlign: 'center'
    },

    buttonWrap: {
        width: '40%'
    }
});
