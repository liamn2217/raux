import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { postEdit, postCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';


class PostCreate extends Component { 
    onButtonPress() {
        const { title, artist, tag } = this.props;

        this.props.postCreate({ title, artist, tag });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Title"
                        placeholder="title"
                        value={this.props.title}
                        //from post actions
                        onChangeText={text => this.props.postEdit({ prop: 'title', value: text })}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label="Artist"
                        placeholder="artist"
                        value={this.props.artist}
                        onChangeText={text => this.props.postEdit({ prop: 'artist', value: text })}
                    />
                </CardSection>

                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>Select a tag</Text>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={tag => this.props.postEdit({ prop: 'tag', value: tag })}
                    >
                        <Picker.Item label="EDM" value="EDM" />
                        <Picker.Item label="Country" value="Country" />
                        <Picker.Item label="Rock" value="Rock" />
                        <Picker.Item label="Rap" value="Rap" />
                        <Picker.Item label="Pop" value="Pop" />
                    </Picker>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Post
                    </Button>
                </CardSection>
            </Card>
        );
    }
}
//override the style on the last card section so that they go vertically
//normally it is flexDirection: 'row'

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
    //postForm comes from the combine reducers in index.js
    const { title, artist, tag } = state.postForm;

    return { title, artist, tag };
};

export default connect(mapStateToProps, { 
    postEdit, 
    postCreate 
})(PostCreate);
