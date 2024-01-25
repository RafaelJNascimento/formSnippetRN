import React from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import View from './view';
interface IFormInput {
    name: string
    email: string
    password: string
}

const Form: React.FC = () => {
    const schema = yup.object().shape({
        name: yup
            .string()
            .required('O seu nome é necessário!'),
        email: yup
            .string()
            .required('O seu email é necessário')
            .email('Email inválido'),
        password: yup
            .string()
            .required('O sua senha é necessária')
            .min(8, 'Password deve conter no mínimo 8 caracteres'),
    });

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>({
        resolver: yupResolver(schema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    }
    );

    function onPressCadastrar(data: IFormInput) {
        console.log(data)
    }

    const viewProps = {
        control,
        errors,
        handleSubmit,
        onPressCadastrar,
    };

    return <View {...viewProps}/>;
}

export default Form;
