var spans = require('../spans');

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
    , 'continue'    :  undefined

    , 'debugger'    :  undefined
    , 'default'     :  undefined
    , 'delete'      :  undefined
    , 'do'          :  undefined

    , 'else'        :  undefined

    , 'finally'     :  undefined
    , 'for'         :  undefined
    , 'function'    :  undefined

    , 'if'          :  undefined
    , 'in'          :  undefined
    , 'instanceof'  :  undefined

    , 'new'         :  undefined
    , 'return'      :  undefined
    , 'switch'      :  undefined

    , 'this'        :  undefined
    , 'throw'       :  undefined
    , 'try'         :  undefined
    , 'typeof'      :  undefined

    , 'var'         :  undefined
    , 'void'        :  undefined

    , 'while'       :  undefined
    , 'with'        :  undefined
    , _default      :  spans.Keyword
  }
  , 'Punctuator': {
      ';': function (s) { return ''; } 
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

    , '===': undefined
    , '!==': undefined
    , '>>>': undefined
    , '<<=': undefined
    , '>>=': undefined
    
    , '>>>=': undefined

    , _default: spans.Operator  
  }
  , Line: {
     _default: spans['Comment.Single']
    }

  , Block: {
     _default: spans.Comment
    }

  , _default: undefined
};
