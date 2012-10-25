var classes = {
      String                   :  's'
    , Number                   :  'f'

    , Keyword                  :  'k'
    , 'Keyword.Constant'       :  'kc'
    , 'Keyword.Declaration'    :  'kd'
    , 'Keyword.Namespace'      :  'kn'
    , 'Keyword.Pseudo'         :  'kp'
    , 'Keyword.Reserved'       :  'kr'
    , 'Keyword.Type'           :  'kt'

    , Name                     :  'n'
    , 'Name.Attribute'         :  'na'
    , 'Name.Builtin'           :  'nb'
    , 'Name.Builtin.Pseudo'    :  'bp'
    , 'Name.Class'             :  'nc'
    , 'Name.Constant'          :  'no'
    , 'Name.Decorator'         :  'nd'
    , 'Name.Entity'            :  'ni'
    , 'Name.Exception'         :  'ne'
    , 'Name.Function'          :  'nf'
    , 'Name.Property'          :  'py'
    , 'Name.Label'             :  'nl'
    , 'Name.Namespace'         :  'nn'
    , 'Name.Other'             :  'nx'
    , 'Name.Tag'               :  'nt'
    , 'Name.Variable'          :  'nv'
    , 'Name.Variable.Class'    :  'vc'
    , 'Name.Variable.Global'   :  'vg'
    , 'Name.Variable.Instance' :  'vi'


    , Literal                  :  'l'
    , 'Literal.Date'           :  'ld'

    , Operator                 :  'o'
    , Punctuation              :  'p'

    , Comment                  :  'c'
    , 'Comment.Multiline'      :  'cm'
    , 'Comment.Preproc'        :  'cp'
    , 'Comment.Single'         :  'c1'
    , 'Comment.Special'        :  'cs'

    , Generic                  :  'g'
    , 'Generic.Deleted'        :  'gd'
    , 'Generic.Emph'           :  'ge'
    , 'Generic.Error'          :  'gr'
    , 'Generic.Heading'        :  'gh'
    , 'Generic.Inserted'       :  'gi'
    , 'Generic.Output'         :  'go'
    , 'Generic.Prompt'         :  'gp'
    , 'Generic.Strong'         :  'gs'
    , 'Generic.Subheading'     :  'gu'
    , 'Generic.Traceback'      :  'gt'
    }
  , spans = {};
  
function escapeHtml (s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); 
}

function wrap (clazz) {
  return function escapeAndWrap (s) {
    return [ 
        '<span class="'
      , clazz 
      , '">' 
      , escapeHtml(s) 
      , '</span>'
      ].join('');
  };
}

Object.keys(classes)
  .forEach(function (k) {
    spans[k] = wrap(classes[k]);
  });

module.exports = spans;
