{application,sentry,
             [{applications,[kernel,stdlib,elixir,hackney,logger]},
              {description,"The Official Elixir client for Sentry"},
              {modules,['Elixir.Mix.Tasks.Sentry.SendTestEvent',
                        'Elixir.Sentry','Elixir.Sentry.Client',
                        'Elixir.Sentry.Config','Elixir.Sentry.Context',
                        'Elixir.Sentry.DefaultEventFilter',
                        'Elixir.Sentry.Event','Elixir.Sentry.EventFilter',
                        'Elixir.Sentry.HTTPClient',
                        'Elixir.Sentry.LoggerBackend',
                        'Elixir.Sentry.Phoenix.Endpoint','Elixir.Sentry.Plug',
                        'Elixir.Sentry.Sources','Elixir.Sentry.Util']},
              {registered,[]},
              {vsn,"7.0.1"},
              {mod,{'Elixir.Sentry',[]}}]}.