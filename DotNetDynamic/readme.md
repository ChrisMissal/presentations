# DotNetDynamic

**Note:** _work in progress_

## Rough Agenda

1. What is it, how do you use it?
2. Quick story on how it was added to the runtime(?)
3. Pros/Cons
4. When to use it, when not to use it.
5. Real world examples
6. How it's used in Freddie
7. How it's used in Formo
8. Why the usage in Formo is a good idea and should be adopted in new projects

## Notes

* Big deal when implementing is TryInvokeMember() and TryGetMember()
 * Look for other overrides that could be useful
* Be sure to show the "hack" that lets Formo read generics

### Freddie Benefits

* Users of the Api call methods as defined by the MailChimp API, those methods are passed directly to the http calls.

### Formo Benefits

* Intellisense is better than referencing strings
* Reference defaults/fallbacks before they're needed. Later in a project, even if already deployed, you can override defaults without having to compile again.
