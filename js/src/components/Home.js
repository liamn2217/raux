import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View } from 'react-native';
import { postsFetch } from '../actions';
import PostDetail from './PostDetail';
import { NavBar } from './common';

class Home extends Component {
    componentWillMount() {
        this.props.postsFetch();

        //create a data source for the list view
        this.createDataSource(this.props);
    }

    //another life cycle method that will be called
    //whenever we are about to recieve a new set of props
    //to re render the component with
    //nextProps is named by convention
    //it is the next set of props that this component will be rendered with
    //this.props is still the old set of props
    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ posts }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(posts);
    }

    renderRow(post) {
        return <PostDetail post={post} />;
    }

    render() {
        return (
            <View style={styles.viewStyle}>
                <ListView 
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
                <NavBar />
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        flex: 1
    }
};

const mapStateToProps = state => {
    //state.empoyees is an object with many key value pairs
    //for each pair, run this fat arrow function
    //it will be called with each value and key
    //val is the user model, has title artist, tag
    //then create new object, push in all values from user model
    //then also throw ID on top
    //then collect those objects into an array that is assigned to posts
    const posts = _.map(state.posts, (val, uid) => {
        return { ...val, uid };
    });

    return { posts };
};

//map state to props is the first argument
export default connect(mapStateToProps, { postsFetch })(Home);
