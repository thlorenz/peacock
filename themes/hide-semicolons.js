var spans = require('../spans')

module.exports = {

  'Boolean': {
    'true'   :  undefined
  , 'false'  :  undefined
  , _default :  spans['Keyword.Constant']
  }

, 'Identifier': {
    'Date': spans['Literal.Date']
  , 'Error': spans['Generic.Error']
  , _default: spans.Name.Other
  }

, 'Null': {
    _default :  spans['Keyword.Constant']
  }

, 'Numeric': {
    _default: spans.Number
  }

, 'String': {
    _default: spans.String
  }

, 'Keyword': {
    'break'       :  undefined

  , 'case'        :  undefined
  , 'catch'       :  undefined
  , 'class'       :  undefined
  , 'const'       :  undefined
  , 'continue'    :  undefined

  , 'debugger'    :  undefined
  , 'default'     :  undefined
  , 'delete'      :  undefined
  , 'do'          :  undefined

  , 'else'        :  undefined
  , 'enum'        :  undefined
  , 'export'      :  undefined
  , 'extends'     :  undefined

  , 'finally'     :  undefined
  , 'for'         :  undefined
  , 'function'    :  undefined

  , 'if'          :  undefined
  , 'implements'  :  undefined
  , 'import'      :  undefined
  , 'in'          :  undefined
  , 'instanceof'  :  undefined

  , 'new'         :  undefined

  , 'package'     :  undefined
  , 'private'     :  undefined
  , 'protected'   :  undefined
  , 'public'      :  undefined

  , 'return'      :  undefined

  , 'static'      :  undefined
  , 'super'       :  undefined
  , 'switch'      :  undefined

  , 'this'        :  undefined
  , 'throw'       :  undefined
  , 'try'         :  undefined
  , 'typeof'      :  undefined

  , 'var'         :  undefined
  , 'void'        :  undefined

  , 'while'       :  undefined
  , 'with'        :  undefined
  , 'yield'       :  undefined
  , _default      :  spans.Keyword
}
, 'Punctuator': {
    ';': function(s) { return '' }
  , '.': spans.Punctuation
  , ',': spans.Punctuation

  , '{': spans.Punctuation
  , '}': spans.Punctuation
  , '(': spans.Punctuation
  , ')': spans.Punctuation
  , '[': spans.Punctuation
  , ']': spans.Punctuation

  , '<': undefined
  , '>': undefined
  , '+': undefined
  , '-': undefined
  , '*': undefined
  , '%': undefined
  , '&': undefined
  , '|': undefined
  , '^': undefined
  , '!': undefined
  , '~': undefined
  , '?': undefined
  , ':': undefined
  , '=': undefined

  , '<=': undefined
  , '>=': undefined
  , '==': undefined
  , '!=': undefined
  , '++': undefined
  , '--': undefined
  , '<<': undefined
  , '>>': undefined
  , '&&': undefined
  , '||': undefined
  , '+=': undefined
  , '-=': undefined
  , '*=': undefined
  , '%=': undefined
  , '&=': undefined
  , '|=': undefined
  , '^=': undefined
  , '/=': undefined
  , '=>': undefined
  , '**': undefined

  , '===': undefined
  , '!==': undefined
  , '>>>': undefined
  , '<<=': undefined
  , '>>=': undefined
  , '>>>=': undefined
  , '...': undefined
  , '**=': undefined

  , _default: spans.Operator
}
, Line: {
    _default: spans['Comment.Single']
  }

, Block: {
    _default: spans.Comment
  }

  // JSX
  , JSXAttribute: {
      _default: undefined
    }
  , JSXClosingElement: {
      _default: undefined
    }
  , JSXElement: {
      _default: undefined
    }
  , JSXEmptyExpression: {
      _default: undefined
    }
  , JSXExpressionContainer: {
      _default: undefined
    }
  , JSXIdentifier: {
      // many more identifies are possible, div, table, etc.
        className: spans['Name.Class']
      , _default: spans['Name.Tag']
    }
  , JSXMemberExpression: {
      _default: undefined
    }
  , JSXNamespacedName: {
      _default: undefined
    }
  , JSXOpeningElement: {
      _default: undefined
    }
  , JSXSpreadAttribute: {
      _default: undefined
    }
  , JSXText: {
      _default: undefined
    }

  , _default: undefined
}
