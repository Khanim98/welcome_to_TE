import { Fragment, memo } from 'react';

const MainComponent = ({
    user = { name: 'unknown', age: null } // default value for `props.user`
}) => {
    return (
        <Fragment>
            <ChildComponent user={user} />
        </Fragment>
    );
};

// memoized component
const ChildComponent = memo(({ user: { name, age } }) => {
    return (
        <div>user name: {name}, user age: {age}</div>
    )
});
const ChildComponent = memo(
    ({ user: { name, age } }) => {
        console.log("ChildComponent has been updated. Memoization is not working.");

        return (
            <div>
                user name: {name}, user age: {age || "unknown"}
            </div>
        );
    },
    ({ user: prevUser }, { user: nextUser }) => {
        return prevUser.name === nextUser.name && prevUser.age === nextUser.age;
    }
);