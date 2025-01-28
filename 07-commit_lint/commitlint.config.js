module.exports = {
    extends : ["@commitlint/config-conventional"],
    "rules": {
        "type-enum" :[
            2,
            "always",
            [
                "feat",
                "fix",
                "style",
                "ci",
                "revert",
            ]
        ],
        "subject-case" : [2,"always", "sentence-case"]
    }
}
