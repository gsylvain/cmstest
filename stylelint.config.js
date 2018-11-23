module.exports = {
  plugins: [
    "stylelint-selector-bem-pattern"
  ], 
  rules: {
    "indentation": 2,
    "string-quotes": "single",
    "no-duplicate-selectors": true,
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "selector-max-id": 0,
    "selector-no-qualifying-type": true,
    "selector-combinator-space-after": "always",
    "selector-attribute-quotes": "always",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-brackets-space-inside": "never",
    "declaration-block-trailing-semicolon": "always",
    "declaration-no-important": true,
    "declaration-colon-space-before": "never",
    "declaration-colon-space-after": "always",
    "property-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,
    "number-leading-zero": "never",
    "function-url-quotes": "always",
    "font-weight-notation": "numeric",
    "font-family-name-quotes": "always-where-recommended",
    "comment-whitespace-inside": "always",
    "comment-empty-line-before": "always",
    "at-rule-no-vendor-prefix": true,
    "at-rule-empty-line-before": ["always", {
      except: [
        "first-nested",
        "blockless-after-blockless"
      ],
      ignoreAtRules: ["import"]
    }],
    "rule-empty-line-before": ["always", {
      except: ["first-nested"],
      ignore: ["after-comment"]
    }],
    "selector-pseudo-element-colon-notation": "single",
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-no-vendor-prefix": true,
    "selector-max-universal": 0,
    "media-feature-range-operator-space-before": "always",
    "media-feature-range-operator-space-after": "always",
    "media-feature-parentheses-space-inside": "never",
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-colon-space-before": "never",
    "media-feature-colon-space-after": "always",
    "plugin/selector-bem-pattern": {
      "preset": "suit"
    } 
  }
};
