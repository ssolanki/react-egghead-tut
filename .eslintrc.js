module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "eslint-plugin-react"
    ],
    "rules": {
        "indent": [
            2,
            "tab"
        ],
        "linebreak-style": [
            2,
            "unix"
        ],
        "quotes": [
            2,
            "double"
        ],
        "semi": [
            2,
            "always"
        ],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error"
    }
};
