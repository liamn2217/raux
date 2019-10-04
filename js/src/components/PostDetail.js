import React, { Component } from 'react';
//import firebase from 'firebase';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Modal, FlatList } from 'react-native';
import { Card, CardSection, Button } from './common';
import { postDelete } from '../actions';

class PostDetail extends Component {
    state = { showModal: false };

    onOkay() {
        this.setState({ showModal: false });
    }

    viewTags() {
        if (!this.props.post.tags) {
            return (
                <View>
                    <Text>No Tags</Text>
                </View>
            );
        } else {
        return (
            <View>
                <FlatList
                data={this.props.post.tags}
                renderItem={({ item }) => <Text>{item.title}</Text>}
                />
            </View>
            );
        }
    }


      deleteButton() {
        const { uid } = this.props.post;

        this.props.postDelete({ uid });
    }

    render() {
        const { title, artist } = this.props.post;
        //const { currentUser } = firebase.auth();
        return (
            <Card>
                <CardSection style={{ justifyContent: 'space-between' }}>
                    <Text>[USERNAME]</Text>
                    <TouchableOpacity onPress={this.deleteButton.bind(this)} style={styles.buttonStyle}> 
                        <Text>Delete</Text>
                    </TouchableOpacity>
                </CardSection>

                <CardSection>
                    <View style={{ height: 200 }}>
                        <Text style={{ alignSelf: 'center' }}>[IMAGE]</Text>
                    </View>
                </CardSection>

                <CardSection style={{ justifyContent: 'space-between' }}>
                    <Text>
                    {title}{'\n'}
                    {artist}{'\n'}
                    [album]
                    </Text>

                    <Button>[PLAY]</Button>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>Tags</Button>
                </CardSection>

                <Modal
                    visible={this.state.showModal}
                    transparent
                    animationType="slide"
                    onRequestClose={() => {}}
                >
                    <View style={styles.containerStyle}>
                        <CardSection style={styles.cardSectionStyle}>
                        {this.viewTags()}
                        </CardSection>

                        <CardSection>
                        <Button onPress={this.onOkay.bind(this)}>OK</Button>
                        </CardSection>
                    </View>
                </Modal>

            </Card>
        );
    }
}

const styles = {
    buttonStyle: {
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000',
        marginRight: 5
    },
    cardSectionStyle: {
      justifyContent: 'center'
    },
    textStyle: {
      flex: 1,
      fontSize: 18,
      textAlign: 'center',
      lineHeight: 40
    },
    containerStyle: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      position: 'relative',
      flex: 1,
      justifyContent: 'center'
    }
  };

export default connect(null, { postDelete })(PostDetail);
