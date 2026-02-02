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
* __Node:__ `v20.20.0`
* __Run:__ Mon Feb 02 2026 01:54:38 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.0 | ✗      | 48128.8    | 20.29        | 8.58          |
| fastify                  | 4.29.1   | ✓      | 46744.0    | 20.88        | 8.38          |
| polka                    | 0.5.2    | ✓      | 46118.4    | 21.18        | 8.22          |
| 0http                    | 3.5.3    | ✓      | 45806.4    | 21.34        | 8.17          |
| kita                     | 1.1.36   | ✓      | 45781.6    | 21.34        | 8.21          |
| connect                  | 3.7.0    | ✗      | 45244.0    | 21.60        | 8.07          |
| rayo                     | 1.4.6    | ✓      | 45234.4    | 21.61        | 8.07          |
| server-base              | 7.1.32   | ✗      | 45151.2    | 21.65        | 8.05          |
| server-base-router       | 7.1.32   | ✓      | 44814.4    | 21.83        | 7.99          |
| h3                       | 1.15.5   | ✗      | 44765.6    | 21.84        | 7.98          |
| h3-router                | 1.15.5   | ✓      | 43948.0    | 22.26        | 7.84          |
| polkadot                 | 1.0.0    | ✗      | 43570.4    | 22.46        | 7.77          |
| connect-router           | 1.3.8    | ✓      | 43428.8    | 22.51        | 7.74          |
| restana                  | 4.9.9    | ✓      | 38670.4    | 25.36        | 6.90          |
| koa                      | 2.16.3   | ✗      | 37110.6    | 26.44        | 6.62          |
| hono                     | 4.11.7   | ✓      | 36923.0    | 26.57        | 6.06          |
| restify                  | 11.1.0   | ✓      | 35295.0    | 27.83        | 6.36          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34177.4    | 28.76        | 6.09          |
| take-five                | 2.0.0    | ✓      | 34119.6    | 28.80        | 12.27         |
| koa-router               | 12.0.1   | ✓      | 32784.2    | 29.99        | 5.85          |
| hapi                     | 21.4.4   | ✓      | 31331.6    | 31.41        | 5.59          |
| fastify-big-json         | 4.29.1   | ✓      | 11916.2    | 83.36        | 137.10        |
| express                  | 4.22.1   | ✓      | 10879.6    | 91.33        | 1.94          |
| express-with-middlewares | 4.22.1   | ✓      | 10323.0    | 96.29        | 3.84          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
