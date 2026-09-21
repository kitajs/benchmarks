<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.20.2`
* __Run:__ Mon Sep 21 2026 03:03:39 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 48947.2    | 19.96        | 8.73          |
| connect                  | 3.7.0    | ✗      | 47687.2    | 20.47        | 8.50          |
| polka                    | 0.5.2    | ✓      | 46885.6    | 20.84        | 8.36          |
| kita                     | 1.1.36   | ✓      | 46823.2    | 20.84        | 8.39          |
| server-base              | 7.1.32   | ✗      | 46609.6    | 20.94        | 8.31          |
| fastify                  | 4.29.1   | ✓      | 46578.4    | 20.95        | 8.35          |
| rayo                     | 1.4.6    | ✓      | 46108.8    | 21.18        | 8.22          |
| server-base-router       | 7.1.32   | ✓      | 45814.4    | 21.33        | 8.17          |
| polkadot                 | 1.0.0    | ✗      | 45572.0    | 21.45        | 8.13          |
| 0http                    | 3.5.3    | ✓      | 45420.8    | 21.53        | 8.10          |
| connect-router           | 1.3.8    | ✓      | 44047.2    | 22.20        | 7.86          |
| h3                       | 1.15.11  | ✗      | 42459.2    | 23.05        | 7.57          |
| h3-router                | 1.15.11  | ✓      | 41456.8    | 23.62        | 7.39          |
| restana                  | 4.9.9    | ✓      | 39552.0    | 24.79        | 7.05          |
| hono                     | 4.13.8   | ✓      | 39528.8    | 24.83        | 6.48          |
| koa                      | 2.16.4   | ✗      | 36351.0    | 27.00        | 6.48          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35040.2    | 28.04        | 6.25          |
| restify                  | 11.1.0   | ✓      | 35024.2    | 28.04        | 6.31          |
| take-five                | 2.0.0    | ✓      | 34431.4    | 28.54        | 12.38         |
| hapi                     | 21.4.10  | ✓      | 33162.8    | 29.65        | 5.91          |
| koa-router               | 12.0.1   | ✓      | 33129.4    | 29.67        | 5.91          |
| fastify-big-json         | 4.29.1   | ✓      | 11956.6    | 83.05        | 137.55        |
| express                  | 4.22.3   | ✓      | 11296.4    | 87.95        | 2.01          |
| express-with-middlewares | 4.22.3   | ✓      | 10239.0    | 97.03        | 3.81          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
