% Lexer for the ICU/CLDR Plural rules definitions.
% Step 1 is to read in the json rule set.
% Then for each ruleset, pass each rule to the parser in two parts:
%   First the rule name
%   THen the rule definition
%
% Can be invoked in elixir as:
%
%   iex> :plural_rules_lexer.string(rules_as_a_char_list)
%

Definitions.

Equals                  = =
Not_equals              = !=
Mod                     = %|mod
Is                      = is
Not                     = not
And                     = and
Or                      = or
Within                  = within
In                      = in
Decimal_sample          = @decimal
Integer_sample          = @integer
Operand                 = n|i|f|t|v|w
Tilde                   = ~
Comma                   = ,
Range                   = \.\.
Ellipsis                = …|\.\.\.
Decimal                 = [0-9]+(\.[0-9]+)
Integer                 = [0-9]+
Whitespace              = [\s\n\t]

Rules.

{Equals}                : {token,{equals,TokenLine,TokenChars}}.
{Not_equals}            : {token,{not_equals,TokenLine,TokenChars}}.
{Mod}                   : {token,{mod,TokenLine,TokenChars}}.
{Is}                    : {token,{is_op,TokenLine,TokenChars}}.
{Not}                   : {token,{not_op,TokenLine,TokenChars}}.
{And}                   : {token,{and_predicate,TokenLine,TokenChars}}.
{Or}                    : {token,{or_predicate,TokenLine,TokenChars}}.
{Within}                : {token,{within_op,TokenLine,TokenChars}}.
{In}                    : {token,{in,TokenLine,TokenChars}}.
{Integer_sample}        : {token,{sample,TokenLine,'integer'}}.
{Decimal_sample}        : {token,{sample,TokenLine,'decimal'}}.
{Operand}               : {token,{operand,TokenLine,TokenChars}}.
{Tilde}                 : {token,{tilde,TokenLine,TokenChars}}.
{Comma}                 : {token,{comma,TokenLine,TokenChars}}.
{Range}                 : {token,{range_op,TokenLine,TokenChars}}.
{Decimal}               : {token,{decimal,TokenLine,'Elixir.Decimal':new(list_to_binary(TokenChars))}}.
{Integer}               : {token,{integer,TokenLine,list_to_integer(TokenChars)}}.
{Ellipsis}              : {token,{ellipsis,TokenLine,TokenChars}}.
{Whitespace}+           : skip_token.

Erlang code.

-import('Elixir.Decimal', [new/1]).