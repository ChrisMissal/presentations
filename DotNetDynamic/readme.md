# DotNetDynamic

**Note:** _work in progress_

## Rough Agenda

1. What is it, how do you use it?
1. Quick story on how it was added to the runtime(?)
1. Pros/Cons
  * Pros
      1. can be defined at runtime
      1. schema can change without dependencies changing in other libraries or views
  * Cons
      1. can fail hard at runtime
      1. you lose some type checking, intellisense, etc
      1. performance can be an issue, use wisely
1. When to use it, when not to use it.
1. Real world examples
1. How it's used in Freddie
1. How it's used in Formo
1. Why the usage in Formo is a good idea and should be adopted in new projects

## Notes

* Big deal when implementing is TryInvokeMember() and TryGetMember()
 * Look for other overrides that could be useful
* Be sure to show the "hack" that lets Formo read generics
* Using dynamic around process boundaries
* Using dynamic in views

### Freddie Benefits

* Users of the Api call methods as defined by the MailChimp API, those methods are passed directly to the http calls.

### Formo Benefits

* Intellisense is better than referencing strings
* Reference defaults/fallbacks before they're needed. Later in a project, even if already deployed, you can override defaults without having to compile again.
