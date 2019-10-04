import React, { Component } from 'react';
//import { Text } from 'react-native';
import { connect } from 'react-redux';
import { postEdit, postCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';


class PostCreate extends Component { 
    constructor() {
        super();
        this.state = {
            title: '',
            artist: '',
            tags: [],
            tagInput: ''
        };
    }

    onPostPress() {
        const { title, artist, tags } = this.props;
        //const { tags } = this.state;

        this.props.postCreate({ title, artist, tags });
    }

    onTagPress() {
        const { tags } = this.props;

        tags.unshift({
            id: (tags.length == null ? 1 : tags.length + 1), 
            title: this.props.tagInput
        });

        this.setState({
            tagInput: ''
        });
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

                <CardSection>
                    <Input 
                        label="Tag"
                        placeholder="tag"
                        value={this.props.tagInput}
                        onChangeText={tagInput => this.props.postEdit({ prop: 'tagInput', value: tagInput })}
                    />
                    <Button onPress={this.onTagPress.bind(this)}>
                        Add tag
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onPostPress.bind(this)}>
                        Post
                    </Button>
                </CardSection>
            </Card>
        );
    }
}
//override the style on the last card section so that they go vertically
//normally it is flexDirection: 'row'

/*
const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};
*/

const mapStateToProps = (state) => {
    //postForm comes from the combine reducers in index.js
    const { title, artist, tags, tagInput } = state.postForm;

    return { title, artist, tags, tagInput };
};

export default connect(mapStateToProps, { 
    postEdit, 
    postCreate 
})(PostCreate);
