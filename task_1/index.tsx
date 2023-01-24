import { Component, memo, PureComponent } from "react";

type IUser = {
    name: string
    age: number
}

type IProps = {
    user: IUser
}

// functional component
const FirstComponent = memo(({ name, age }: IUser) => {
    console.log("FirstComponent has been updated");

    return (
        <div>
            my name is {name}, my age is {age}
        </div>
    );
});

export { FirstComponent };

// functional component
const SecondComponent = memo(
    ({ user: { name, age } }: IProps) => {
        console.log("SecondComponent has been updated");

        return (
            <div>
                my name is {name}, my age is {age}
            </div>
        );
    },
    ({ user: prevUser }, { user: nextUser }) => {
        return prevUser.name === nextUser.name && prevUser.age === nextUser.age;
    }
);

export { SecondComponent };

// class component
export class ThirdComponent extends PureComponent<IUser> {
    render() {
        console.log("ThirdComponent has been updated");

        return (
            <div>
                my name is {this.props.name}, my age is {this.props.age}
            </div>
        );
    }
}

// class component
export class FourthComponent extends Component<IProps> {
    shouldComponentUpdate(nextProps, nextState) {
        if (
            this.props.user.name === nextProps.user.name &&
            this.props.user.age === nextProps.user.age
        )
            return false;
        return true;
    }
    render() {
        console.log("FourthComponent has been updated");

        return (
            <div>
                my name is {this.props.user.name}, my age is {this.props.user.age}
            </div>
        );
    }
}
