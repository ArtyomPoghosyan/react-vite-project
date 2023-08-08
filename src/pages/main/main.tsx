import { Button, Checkbox, FormControl, FormLabel, IconButton, Input, VStack, useColorMode } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { useFormik } from "formik";
import { validationPatterns } from '@/components/validationPattern/validationFiled';

interface IValue {
    email: string,
    password: string | number,
    rememberMe: boolean
}

interface err {
    email?: string,
    password?: string
}

const Main = () => {

    const { colorMode, toggleColorMode } = useColorMode();


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        validate: (values: IValue) => {
            const errors: err = {};

            if (!values.email) {
                errors.email = 'Email is required';
            }
            else if (!validationPatterns.EMAIL.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Password is required';
            }
            else if (values.password.toString().length < 3) {
                errors.password = "small than 3 "
            }

            return errors;
        },

        onSubmit: (values) => {
            console.log(values);

        },
    });

    return (
        <>
            <IconButton
                aria-label="Toggle dark mode"
                icon={colorMode === 'light' ? <Button>cerek</Button> : <Button>gisher</Button>}
                onClick={toggleColorMode}
            />

            <form onSubmit={formik.handleSubmit}>
                <VStack spacing={4} align="flex-start">
                    <FormControl
                    >
                        <FormLabel htmlFor="email">Email Address</FormLabel>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            variant="filled"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}

                        />
                    </FormControl>
                    {formik.errors.email && formik.touched.email && (
                        <div style={{ color: 'red' }}>{formik.errors.email}</div>
                    )}
                    <FormControl
                    // isInvalid={formik.errors.password && formik.touched.password}

                    >
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            variant="filled"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}

                        />
                    </FormControl>
                    {formik.errors.password && formik.touched.password && (
                        <div style={{ color: 'red' }}>{formik.errors.password}</div>
                    )}
                    <Checkbox
                        id="rememberMe"
                        name="rememberMe"
                        onChange={formik.handleChange}
                        isChecked={formik.values.rememberMe}
                        colorScheme="purple"
                    >
                        Remember me?
                    </Checkbox>
                    <Button isDisabled={(!formik.values.email && !formik.values.password) ? true : false} type="submit" colorScheme="purple" width="full">
                        Login
                    </Button>
                </VStack>
            </form>
            <div>
                <Outlet />
            </div>

        </>
    );
};

export default Main;