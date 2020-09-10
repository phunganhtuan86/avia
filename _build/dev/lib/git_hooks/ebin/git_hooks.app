{application,git_hooks,
             [{applications,[kernel,stdlib,elixir,logger,blankable,recase]},
              {description,"Add git hooks to your Elixir projects"},
              {modules,['Elixir.GitHooks','Elixir.GitHooks.Config',
                        'Elixir.GitHooks.Printer',
                        'Elixir.Mix.Tasks.GitHooks.Install',
                        'Elixir.Mix.Tasks.GitHooks.Run']},
              {registered,[]},
              {vsn,"0.2.0"}]}.
