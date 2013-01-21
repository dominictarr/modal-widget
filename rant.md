#From HyperText to HyperVisor.

I have unreasonable expectations.

I expect that it is possible to solve problems approximately once.

I don't expect things to be _easy_, necessarily, at least not easy in the short term.

But long term, we progress by making hard things easy.

Technology progresses at the rate that things become simple.

The web did this once, it amaturized publishing.

In 1998 a 13 year old could create a website like this [http://areallykewlwebpage.tripod.com],
and be at the cutting edge.

But the golden age of HTML is over. Now that everyone has a facebook page,
Nobody will not be impressed if you can only string a few html tags together.

The bar has moved.

The web is no longer about _pages_, now it's about _Applications_.

Applications are much more difficult, especially given that the Web was 
designed to be a publishing platform. A publishing platform, that, through
an accident of history, has become an operating system.

Nowadays, the web more akin to Heroku than Adobe Acrobat. With a web browser, 
you install untrusted applications into memory from across the network,
they are safely sandboxed from intereferring with each other, or with your
operating system.

This is basically the same architecture that the _other_ end of the cloud is
built on, the services you use every day, and the 'machine' that this blog is
hosted on all run on 'virtual machines', that is, simulated computers, that run
inside a physical machine, the "hypervisor".

This architecture has numerous advantages.

The owners of the physical machines can easily accept arbitary program from 
their customers and run them, confidantly knowing that it will not affect any
of their other customers. Also, vitural machines can be easily 'scaled out' 
which is basically the same thing as opening a website in another tab.

This is not how things where usually done in 1998. When 
[James Halliday](https://github.com/substack) made [areallykewlwebpage](http://areallykewlwebpage.tripod.com)
sites where hosted statically. That is, they weren't _programs_, they where just files.

A bigger than from hypertext to hypervisor, isn't really possible.
The hypervisor at the user end, the web browser, has a lot of historical baggage.


