// Core
import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { hot } from 'react-hot-loader';

// ! react-redux connect должен быть внутри withRouter react-router-dom, иначе будет баг.
// withRouter нужен для решения проблемы конфликта компонентов Route с привязкой connect
// Функция connect под капотом содержит много оптимизаций. Но connect ничего не знает о Реакт Роутере, поэтому connect его как бы блокирует, не специально. Это баг. withRouter - это компонент высшего порядка в библиотеке Реакт Роутера - это встроенное решение.
// Без использования withRouter кнопки навигации NavLink (которые содержатся в компонентах Login, Signup, ..., отображение которых определяется свойством isAuthenticated, полученным благодаря connect) будут переключать роуты, но содержимое страницы меняться не будет.
// withRouter должен обертывать все приложение вместе с connect
// Подробнее: _Lectrum. Теория и практика\5. Маршрутизация в Redux\2. Практика. 1 часть\06:07...07:39

// Pages
import { Login, Signup, Feed, Profile, NewPassword } from '../pages';

// Instruments
import { book } from "./book"; // Хранит информацию о всех роутах приложения.

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.get('isAuthenticated'),
    };
};

@hot(module)
@withRouter
@connect(mapStateToProps)
export default class App extends Component {
    render () {
        const { isAuthenticated } = this.props;

        return isAuthenticated ? (
            // Приватные роуты.
            <Switch>
                <Route component = { Feed } path = { book.feed } />
                <Route component = { Profile } path = { book.profile } />
                <Route component = { NewPassword } path = { book.newPassword } />
                <Redirect to = { book.feed } />
            </Switch> // Switch рендерит первый компонент, для которого есть совпадение по path, а все компоненты, которые идут дальше - пропускает.
        ) : (
            // Публичные роуты.
            <Switch>
                <Route component = { Login } path = { book.login } />
                <Route component = { Signup } path = { book.signUp } />
                <Redirect to = { book.login } />
            </Switch>
        );
    }
}
