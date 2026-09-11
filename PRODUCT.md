# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally:

- **Hiring teams** (recruiters, hiring managers, product leads) evaluating Juan
  for a Product Manager role. They skim the home page, open one or two case
  studies, and decide whether to reach out.
- **Prospective consulting clients** looking for someone to shape and deliver a
  digital product or technology solution. They want evidence that Juan can
  understand their business problem and carry it through to a shipped product.

Both arrive from a link (CV, LinkedIn, a referral) on desktop or mobile, with
limited time and no obligation to keep reading.

## Product Purpose

Personal portfolio for Juan, a Product Manager and consultant in technology and
digital solutions. It presents who he is, the work he has done as case studies,
and two clear ways to get in touch: working together (consulting) or hiring him
(employment). Success is a visitor from either audience reaching out.

## Positioning

Juan is the bridge between business and technology: he translates business needs
into product and speaks the language of engineering teams. The portfolio itself
is part of the proof: Juan builds it himself, and its visual and UX quality is
meant to demonstrate the standard he holds his products to.

## Operating Context

- **Home:** introduction (with a planned animated character video), a grid of
  work linking to case studies, and a contact section with two paths
  ("Work with me?" and "Hire me?").
- **Case study pages:** one per project, structured as context, challenges,
  key principles, and final result, with supporting images.
- **Contact:** a contact form backed by Supabase is planned but not built yet;
  its placement (page, modal or section) is undecided.

## Capabilities and Constraints

- Static site built with Astro 7, TypeScript and Tailwind CSS v4; Supabase for
  the contact form backend (built step by step by Juan).
- Light and dark themes; the site follows the visitor's operating system theme.
- Case studies cover three kinds of work: projects for past employers (some may
  be under NDA and need anonymizing), freelance/consulting projects, and
  personal projects.
- **Undecided:** site language (current copy is placeholder and mixes English
  and Spanish), navigation on case study pages, contact form placement.

## Brand Commitments

- Name: Juan. Role line: Product Manager and consultant in technology and
  digital solutions.
- Binding direction from Juan: minimalist, carefully crafted visual and UX
  quality, in the spirit of Pixar and Apple.
- A planned animated character video is part of the home introduction.

## Evidence on Hand

- Draft layouts for the home and case study page exist outside the repo
  (`../Landing/prueba_landing/home.html`, `detail.html`).
- All copy and images are placeholders. No real case study content, metrics,
  client names, testimonials or logos exist yet; future work must not invent
  them.

## Product Principles

1. **The work is the proof.** Case studies carry the argument; everything else
   frames them and gets out of the way.
2. **Business and technology in one voice.** Every project explains the business
   problem and the product and technical decisions behind the outcome.
3. **Craft is the credential.** Visual and interaction quality are held to the
   same bar Juan claims for his products; nothing ships rough.
4. **Two audiences, one clear next step.** Both hiring teams and clients always
   know how to get in touch.
5. **Honest by default.** Confidential work is anonymized rather than
   embellished; no claim appears without real evidence behind it.
