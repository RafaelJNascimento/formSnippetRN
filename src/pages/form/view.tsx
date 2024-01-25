import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import {
    Control,
    Controller,
    FieldErrors,
    SubmitHandler,
    UseFormHandleSubmit
} from 'react-hook-form';

import styles from './styles';

interface IFormInput {
    name: string
    email: string
    password: string
}
interface FormViewProps {
    errors: FieldErrors<IFormInput>
    control: Control<IFormInput, any>
    handleSubmit: UseFormHandleSubmit<IFormInput, any>
    onPressCadastrar: SubmitHandler<IFormInput>,
}

const FormView: React.FC<FormViewProps> = (props) => {

    const {
        errors,
        control,
        handleSubmit,
        onPressCadastrar,
    } = props;

    return (
        <SafeAreaView style={styles.wrapper}>
            <StatusBar
                barStyle='dark-content'
            />
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled>
                <View style={styles.wrapper}>
                    <View style={styles.form}>
                        <Text
                            accessible
                            accessibilityRole='text'
                            accessibilityLabel='Título de boas vindas'
                            accessibilityHint='Título de boas vindas'
                            style={styles.title}>
                            Bem-Vindo(a)
                        </Text>
                        <Controller
                            name='name'
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    value={value}
                                    onBlur={onBlur} //chamado quando o text input é focado
                                    style={[
                                        styles.input,
                                        {
                                            borderWidth: errors.name ? 1 : 0,
                                            borderColor: errors.name && '#f42000'
                                        }
                                    ]}
                                    accessible
                                    autoCorrect={false}
                                    autoCapitalize='none'
                                    onChangeText={onChange}
                                    placeholder='Digite seu nome'
                                    accessibilityLabel='Entrada de texto para nome'
                                    accessibilityHint='Entrada de texto para digitar seu nome'
                                />
                            )}
                        />
                        {errors.name &&
                            <Text style={styles.labelError}>
                                {errors.name.message}
                            </Text>
                        }
                        <Controller
                            name='email'
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    value={value}
                                    onBlur={onBlur}
                                    style={[
                                        styles.input,
                                        {
                                            borderWidth: errors.email ? 1 : 0,
                                            borderColor: errors.email && '#f42000'
                                        }
                                    ]}
                                    accessible
                                    autoCorrect={false}
                                    autoCapitalize='none'
                                    onChangeText={onChange}
                                    keyboardType='email-address'
                                    textContentType='emailAddress'
                                    placeholder='Digite seu email'
                                    accessibilityLabel='Entrada de texto para email'
                                    accessibilityHint='Entrada de texto para digitar seu endereço de email'
                                />)}
                        />
                        {errors.email &&
                            <Text style={styles.labelError}>
                                {errors.email.message}
                            </Text>
                        }
                        <Controller
                            name='password'
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    value={value}
                                    onBlur={onBlur}
                                    style={[
                                        styles.input,
                                        {
                                            borderWidth: errors.password ? 1 : 0,
                                            borderColor: errors.password && '#f42000'
                                        }
                                    ]}
                                    accessible
                                    secureTextEntry={true}
                                    onChangeText={onChange}
                                    placeholder='Digite sua senha'
                                    accessibilityLabel='Entrada de texto para senha'
                                    accessibilityHint='Entrada de texto para digitar sua senha'
                                />)}
                        />
                        {errors.password &&
                            <Text style={styles.labelError}>
                                {errors.password.message}
                            </Text>
                        }
                        <View style={styles.footer}>
                            <TouchableOpacity
                                accessible
                                accessibilityRole='button'
                                style={styles.buttonFooter}
                                accessibilityLabel='Botão de cadastro'
                                onPress={handleSubmit(onPressCadastrar)}
                                accessibilityHint='Clique duas vezer para cadastrar usuário'>
                                <Text style={styles.textButtonFooter}>
                                    Cadastrar
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default FormView;
